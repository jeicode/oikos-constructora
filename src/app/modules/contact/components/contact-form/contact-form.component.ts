import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { regexEmail, regexNumber } from 'src/app/shared/data/regex';
import { ContactService } from 'src/app/shared/services/api/contact.service';
import { PageService } from 'src/app/shared/services/api/page.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { GlobalService } from 'src/app/shared/services/api/global.service';

import { FormService } from 'src/app/shared/services/functions/form.service';
import { ConfigService } from 'src/app/shared/services/functions/config.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['../../pages/contact-page/contact-page.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  showErrors: boolean = false;
  affairList: any[] = []
  housingProjects: any[] = []


  //data analytics
  sourceTrack: string | null | undefined;
  mediumTrack: string | null | undefined;
  campaignTrack: string | null | undefined;

  @Input() typeForm: 'general' | 'postventas' = 'general';
  @Input() recipient_mail: string = '';

  constructor(private fb: FormBuilder, public formService: FormService,
    private router: Router,
    private configService: ConfigService,
    private globalService: GlobalService,
    private contactService: ContactService, private pageService: PageService,
    private projectService: ProjectService) { }

  ngOnInit(): void {
    if (this.configService.isBrowser()) {
      this.sourceTrack = localStorage.getItem('sourceTrack');
      this.mediumTrack = localStorage.getItem('mediumTrack');
      this.campaignTrack = localStorage.getItem('campaignTrack');

    }

    this.initForm()
    this.getProjectsHome();
  }


  initForm() {

    if (this.typeForm === 'general') {
      this.contactForm = this.fb.group({
        full_name: ['', this.formService.noWhitespaceValidator],
        email: ['', [this.formService.noWhitespaceValidator, Validators.pattern(regexEmail)]],
        phone: ['', Validators.compose([Validators.required, Validators.pattern(regexNumber)])],
        affair: ['', this.formService.noWhitespaceValidator],
        message: ['', this.formService.noWhitespaceValidator],
        project: ['', this.formService.noWhitespaceValidator],
        terms: [false, Validators.requiredTrue]
      })

      this.getAffairList()
    }


    else { //this.typeForm === 'postventas'
      this.contactForm = this.fb.group({
        full_name: ['', this.formService.noWhitespaceValidator],
        email: ['', [this.formService.noWhitespaceValidator, Validators.pattern(regexEmail)]],
        phone: ['', Validators.compose([Validators.required, Validators.pattern(regexNumber)])],
        message: ['', this.formService.noWhitespaceValidator],
        terms: ['', Validators.requiredTrue]
      })
    }

  }

  async getProjectsHome() {
    const housingProjects = await this.projectService.getProyectosByTipo('1');
    if (housingProjects) this.housingProjects = housingProjects;
  }

  /**
   * Traer lista de asuntos
   */
  async getAffairList() {
    const affairList = await this.pageService.getElementsContent('titulo asunto contacto', 'asunto_contacto');
    if (affairList?.length > 0) this.affairList = affairList


  }


  async submitContactForm() {

    if (this.contactForm.valid) {

      const { email, message, phone, full_name, affair, project } = this.contactForm.getRawValue();

      const data = {
        nombre: full_name,
        email,
        telefono: phone,
        page_section: this.typeForm,
        comentario: message,
        asunto: affair,
        correo_destinatario: this.recipient_mail,
        proyecto: project,
        source: this.sourceTrack,
        medium: this.mediumTrack,
        campaign: this.campaignTrack,
      }
      const response = await this.contactService.postContactForm(data)

      if (response?.resp !== 'no') {
        this.router.navigateByUrl(response?.resp, { state: { nameContact: full_name } })
      } else {
        await this.globalService.sendMailApiError({
          api: 'api/v1/setContactForm',
          errors: {
            url: this.router.url,
            request: data,
            response
          }
        });
        alert('Opps ocurrió un error enviando el formulario')
      }
      this.contactForm.reset()

    } else {
      this.showErrors = true
    }
  }


  hasErrorsFieldForm(field: string): Boolean {
    const form = this.contactForm
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors)
  }
}
