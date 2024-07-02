import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { regexEmail, regexNumber } from '../../data/regex';
import { FormService } from '../../services/functions/form.service';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from '../../services/api/project.service';
import { Router, RouterModule } from '@angular/router';
import { ConfigService } from '../../services/functions/config.service';

@Component({
  selector: 'app-modal-pre-launch-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './modal-pre-launch-project.component.html',
  styleUrls: ['./modal-pre-launch-project.component.css']
})
export class ModalPreLaunchProjectComponent implements OnInit, OnDestroy {

  @Input() modalEvent!: Observable<boolean>;
  @Input() project: Project = new Project();

  modalIsOpen: boolean = false
  eventsSubscription!: Subscription;
  showErrors: boolean = false;

  //data analytics
  sourceTrack: string | null | undefined;
  mediumTrack: string | null | undefined;
  campaignTrack: string | null | undefined;



  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(regexEmail)]],
    phone: ['', [Validators.required, Validators.pattern(regexNumber)]],
    terms: ['', Validators.requiredTrue],
    project_id: [''],
    title_project: [''],
    sendTo: ['']
  })

  constructor(
    private fb: FormBuilder, private formService: FormService,
    private configServ: ConfigService,
    private projectService: ProjectService, private router: Router) { }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe()
  }
  ngOnInit(): void {
    if (this.configServ.isBrowser()) {
      this.sourceTrack = localStorage.getItem('sourceTrack');
      this.mediumTrack = localStorage.getItem('mediumTrack');
      this.campaignTrack = localStorage.getItem('campaignTrack');
    }
    this.eventsSubscription = this.modalEvent.subscribe((event: any) => {
      const { openModal } = event
      if (openModal) {
        this.setModalIsOpen(openModal)
      }
    })
  }

  async saveFormData() {
    if (this.form.valid) {
      this.form.patchValue({
        project_id: this.project.id,
        title_project: this.project.titulo_proyecto,
        sendTo: this.project.email_contactos,
        source: this.sourceTrack,
        medium: this.mediumTrack,
        campaign: this.campaignTrack,

      })

      const res = await this.projectService.createContactPreLaunchProject(this.form.getRawValue())

      if (res) {
        this.modalIsOpen = false;
        this.router.navigateByUrl('/gracias/general');
      } else {
        alert('Ocurrió un error, contactese con el administrador')
      }

    } else {
      this.showErrors = true;
    }
  }
  setModalIsOpen(value: boolean) {
    this.modalIsOpen = value
  }

  hasErrorsFieldForm(field: string): Boolean {
    const form = this.form
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors)
  }

}
