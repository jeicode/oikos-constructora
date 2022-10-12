import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { Project } from 'src/app/core/models/project.model';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/functions/form.service';
import { regexEmail, regexNumber } from '../../data/regex';
import { ProjectService } from '../../services/api/project.service';


@Component({
  selector: 'app-wpp-modal-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wpp-modal-project.component.html',
  styleUrls: ['./wpp-modal-project.component.css']
})
export class WppModalProjectComponent implements OnInit, OnDestroy {

  BASE_URL:String = environment.base_url;
  @Input() project:Project = new Project()
  @Input() modalEvent!: Observable<boolean>;
  @Input() showFloatingButton: boolean = false;

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
              private projectService: ProjectService) { }


  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.eventsSubscription = this.modalEvent.subscribe((event) => this.openModal());
  }
  
  openModal(){
    this.modalIsOpen = true
    
  }
  
  closeModal(){
    this.modalIsOpen = false
  }
  
  
  sendContactUserWpp(){
    console.log("validando")
    if (this.contactWppForm.valid){
      this.contactWppForm.patchValue({
        project_id: this.project.id
      })
      this.projectService.createContactWppProject(this.contactWppForm.getRawValue());
      this.redirectToWppLink();
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
    window.open(this.project.api_wsp, '_blank')
  }


  
}
