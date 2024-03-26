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


@Component({
  selector: 'app-wpp-modal-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wpp-modal-project.component.html',
  styleUrls: ['./wpp-modal-project.component.css']
})
export class WppModalProjectComponent implements OnInit, OnDestroy {

  BASE_URL:String = environment.imagenes_url;
  @Input() project:Project = new Project()
  @Input() modalEvent!: Observable<boolean>;
  @Input() showFloatingButton: boolean = false;
  @Input() idBtnWpp: string = ''

  eventsSubscription!: Subscription;
  modalIsOpen: boolean = false;
  showErrors:boolean = false

  contactWppForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(regexEmail)]],
    phone: ['', [Validators.required, Validators.pattern(regexNumber)]],
    project_id: [''],
  })

  constructor(private fb:FormBuilder, private formService:FormService,
              private globalService: GlobalService, private router: Router,
              private projectService: ProjectService) { }


  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.eventsSubscription = this.modalEvent.subscribe((event:any) => this.setOpenModalValue(event?.openModal));
  }
  
  setOpenModalValue(openModal:boolean|undefined){
    if (openModal !== undefined) this.modalIsOpen = openModal
  }
    
  async sendContactUserWpp(){
    if (this.contactWppForm.valid){
      this.contactWppForm.patchValue({
        project_id: this.project.id
      })
      const data = this.contactWppForm.getRawValue()
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
            response:res
          }
        });
        alert('Opps ocurrió un error enviando el formulario')

      }
      this.contactWppForm.reset()

    } else {
      this.showErrors = true;
    }
  }
  
  
  hasErrorsFieldForm(field:string): Boolean {
    const form = this.contactWppForm
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors)
  } 

  
  redirectToWppLink(){
    if(this.project.origin=='home') window.open(this.project.api_wsp, '_blank')
    else window.open(this.project.api_wsp_flotante, '_blank')
  }

  
}
