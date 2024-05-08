import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Project } from 'src/app/core/models/project.model';
import { regexEmail, regexNumber } from 'src/app/shared/data/regex';
import { GlobalService } from 'src/app/shared/services/api/global.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { FormService } from 'src/app/shared/services/functions/form.service';

declare const $:any;
@Component({
  selector: 'app-calculate-form',
  templateUrl: './calculate-form.component.html',
  styleUrls: ['../../pages/contact-page/contact-page.component.css'],
  standalone: true,
  imports:[
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class CalculateFormComponent implements OnInit {

  showErrors: boolean = false
  disableForm:boolean = true
  housingProjects:any[] = []
  selectedProject:Project = new Project();

  datosCalc             : any = [];
  datosCuota            : any = [];
  datosAnio             : any = [];
  porcFinanciar         : number = 100;

  //data analytics
  sourceTrack           : string | null | undefined;
  mediumTrack           : string | null | undefined;
  campaignTrack         : string | null | undefined;

  calculateForm: FormGroup = this.fb.group({
    full_name:['', this.formService.noWhitespaceValidator],
    project_slug: ['', this.formService.noWhitespaceValidator],
    email:['', [this.formService.noWhitespaceValidator ,Validators.pattern(regexEmail)]],
    phone:['', Validators.compose([Validators.required, Validators.pattern(regexNumber)])],
    initial_fee:[0, Validators.compose([Validators.required,Validators.max(100)])],
    total_fees:[null,Validators.compose([Validators.required])],
    termInYears:['10'],
    terms: ['', Validators.requiredTrue]
  })

  constructor(private fb:FormBuilder, private formService: FormService, private globalService:GlobalService,
              private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.sourceTrack = localStorage.getItem('sourceTrack');
    this.mediumTrack = localStorage.getItem('mediumTrack');
    this.campaignTrack = localStorage.getItem('campaignTrack');
    this.getProjectsHome()
  }

  async getProjectsHome(){
    const housingProjects = await this.projectService.getProyectosByTipo('1');
    if (housingProjects) this.housingProjects = housingProjects;
  }

  hasErrorsFieldForm(field:string): Boolean {
    const form = this.calculateForm
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors)
  }


  async updateProjectSelected(){
    const [project] = await this.projectService.getProyectoByUrl(this.calculateForm.value?.project_slug);

    if (project) {
      this.selectedProject = project
      this.calculateForm.patchValue({
        'initial_fee': this.selectedProject.porcentaje_minimo
      })

      this.calculatePercentage();
      this.disableForm = false;
    } else {
      alert("Ocurrió un error, por favor contactése con el administrador")
    }
  }

  async calculatePercentage(){
    const {initial_fee, total_fees, termInYears} = this.calculateForm.getRawValue()
    let porcentaje = initial_fee
    let cuotasinicialfinanciar = total_fees
    let plazoaniosa = termInYears
    let financiar = this.selectedProject.financiar

    this.porcFinanciar = (100-porcentaje);
    const [datosCalc]= await this.projectService.getCalculoPorcentaje(this.selectedProject.valor_proyecto, porcentaje, 
                                                                    cuotasinicialfinanciar, plazoaniosa, financiar);
                                                                  
    this.datosCalc = datosCalc

    $(".valorCuotaInicial").val('$ '+this.datosCalc['cuotaInicial']);
    $(".diferencia").val('$ '+this.datosCalc['diferencia']);
    if(this.datosCalc['cuotasinicialfinanciar']!='inf'){
      $(".cuotamensual").val('$ '+this.datosCalc['cuotasinicialfinanciar']);
    }
    $(".valorafinanciar").val('$ '+this.datosCalc['valorafinanciar']);

    this.termInYears();
  }


  async diferenciadordecuotasmensuales(){
    var saldocuotainicial = $(".diferencia").val();
    var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();

    this.datosCuota = await this.projectService.getCalculoCuota(saldocuotainicial, cuotasinicialfinanciar);
    this.datosCuota = this.datosCuota[0];

    if(this.datosCuota['valorcuotas']!='inf'){
      $(".cuotamensual").val('$ '+this.datosCuota['valorcuotas']);
    }
  }


  async termInYears(){
    var cuota = this.calculateForm.getRawValue()?.termInYears
    var valorafinanciar = $(".valorafinanciar").val();
    this.datosAnio = await this.projectService.getPlazoanios(cuota, valorafinanciar);
    this.datosAnio = this.datosAnio[0];

    $(".cuotahipoteca").val('$ '+this.datosAnio['total']);
  }

  async insertContact(){
    const data = {
      nombre: this.calculateForm.controls['full_name']?.value,
      email: this.calculateForm.controls['email']?.value,
      telefono: this.calculateForm.controls['phone']?.value,
      cuotaInicial: this.calculateForm.controls['initial_fee']?.value,
      numeroCuotas: this.calculateForm.controls['total_fees']?.value,
      valorCuotaInicial: $(".valorCuotaInicial").val(),
      separacion: $(".separacion").val(),
      saldoCuotaInicial: $(".diferencia").val(),
      cuotamensual: $(".cuotamensual").val(),
      porcentajeFinanciar: $(".porcentajeFinanciar").val(),
      valorafinanciar: $(".valorafinanciar").val(),
      plazoaniosa: this.calculateForm.controls['termInYears']?.value,
      cuotahipoteca: $(".cuotahipoteca").val(),
      porcentajeseparacion: this.selectedProject.porcentaje_separacion,
      url_proyecto: window.location.href,
      proyecto: this.selectedProject.titulo_proyecto,
      valorProyecto: this.selectedProject.valor_proyecto,
      sendTo: this.selectedProject.email_contactos,
      id_proyecto: this.selectedProject.id,
      source: this.sourceTrack,
      medium: this.mediumTrack,
      campaign: this.campaignTrack,
    }

    if(this.calculateForm.valid){
      const {resp} = await this.projectService.setCalculadoraForm(data);
      if(resp!='no') {
        this.router.navigateByUrl(resp, { state: { nameContact: this.calculateForm.controls['full_name']?.value } })
      }

      else {
        await this.globalService.sendMailApiError({
          api: 'v1/setCalculadoraForm',
          errors: {
            url: this.router.url,
            request: data,
            response:resp
          }
        });
        alert('Opps ocurrió un error enviando el formulario')
      }
    }else{
      this.showErrors = true
    }
  }

}
