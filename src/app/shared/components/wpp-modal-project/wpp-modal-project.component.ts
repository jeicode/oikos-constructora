import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { Project } from 'src/app/core/models/project.model';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/functions/form.service';
import { regexEmail, regexNumber } from '../../data/regex';
import { ProjectService } from '../../services/api/project.service';
import { GlobalService } from '../../services/api/global.service';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/functions/config.service';


@Component({
  selector: 'app-wpp-modal-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wpp-modal-project.component.html',
  styleUrls: ['./wpp-modal-project.component.css']
})
export class WppModalProjectComponent implements OnInit, OnDestroy {

  BASE_URL: String = environment.imagenes_url;
  @Input() project: Project = new Project()
  @Input() modalEvent!: Observable<boolean>;
  @Input() showFloatingButton: boolean = false;
  @Input() idBtnWpp: string = ''

  eventsSubscription!: Subscription;
  modalIsOpen: boolean = false;
  showErrors: boolean = false
  disabledButton: boolean = false;
  textoButton: string = "Iniciar conversación";

  //data analytics
  sourceTrack: string | null | undefined;
  mediumTrack: string | null | undefined;
  campaignTrack: string | null | undefined;

  url_origen: any;

  contactWppForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(regexEmail)]],
    phone: ['', [Validators.required, Validators.pattern(regexNumber)]],
    project_id: [''],
  })

  constructor(private fb: FormBuilder, private formService: FormService,
    private configServ: ConfigService,
    private globalService: GlobalService, private router: Router,
    private projectService: ProjectService) { }


  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe()
  }

  ngOnInit(): void {
    if (this.configServ.isBrowser()) {
      this.sourceTrack = localStorage.getItem('sourceTrack');
      this.mediumTrack = localStorage.getItem('mediumTrack');
      this.campaignTrack = localStorage.getItem('campaignTrack');
    }


    this.eventsSubscription = this.modalEvent.subscribe((event: any) => this.setOpenModalValue(event?.openModal));

    this.url_origen = this.router.url;
    if (this.url_origen == '/') {
      this.modalIsOpen = true;
    }
  }

  setOpenModalValue(openModal: boolean | undefined) {
    if (openModal !== undefined) this.modalIsOpen = openModal
  }

  async sendContactUserWpp() {
    if (this.contactWppForm.valid) {

      this.textoButton = "Por favor espere...";
      this.disabledButton = true;

      this.contactWppForm.patchValue({
        project_id: this.project.id
      })
      const { email, name, phone, project_id } = this.contactWppForm.getRawValue()
      this.contactWppForm.reset()

      const data = {
        email,
        name,
        phone,
        project_id,
        source: this.sourceTrack,
        medium: this.mediumTrack,
        campaign: this.campaignTrack,
        url_origen: window.location.href
      }


      const res = await this.projectService.createContactWppProject(data);
      if (res) {
        this.redirectToWppLink();
      }
      else {

        await this.globalService.sendMailApiError({
          api: 'v1/createContactWppProject',
          errors: {
            url: this.router.url,
            request: data,
            response: res
          }
        });
        alert('Opps ocurrió un error enviando el formulario')

      }
      this.contactWppForm.reset()
      this.disabledButton = false;
      this.textoButton = "Iniciar conversación";

    } else {
      this.showErrors = true;
    }
  }


  hasErrorsFieldForm(field: string): Boolean {
    const form = this.contactWppForm
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors)
  }


  redirectToWppLink() {
    if (this.project.origin == 'home') window.open(this.project.api_wsp, '_blank')
    else window.open(this.project.api_wsp_flotante, '_blank')
  }


}
