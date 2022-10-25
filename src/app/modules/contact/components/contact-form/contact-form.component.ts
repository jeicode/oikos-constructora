import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { regexEmail, regexNumber } from 'src/app/shared/data/regex';
import { ContactService } from 'src/app/shared/services/api/contact.service';
import { PageService } from 'src/app/shared/services/api/page.service';
import { FormService } from 'src/app/shared/services/functions/form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['../../pages/contact-page/contact-page.component.css'],
  standalone: true,
  imports:[
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  showErrors: boolean = false;
  affairList:any[] = []

  @Input() typeForm:'general'  | 'postventas'  = 'general';
  @Input() recipient_mail:string = '';

  constructor(private fb: FormBuilder, public formService: FormService, private router: Router,
              private contactService: ContactService, private pageService: PageService) { }

  ngOnInit(): void {
    this.initForm()
  }


  initForm(){

    if( this.typeForm === 'general' ) {
      this.contactForm = this.fb.group({
        full_name:['', this.formService.noWhitespaceValidator],
        email:['', [this.formService.noWhitespaceValidator ,Validators.pattern(regexEmail)]],
        phone:['', Validators.compose([Validators.required, Validators.pattern(regexNumber)])],
        affair:['', this.formService.noWhitespaceValidator],
        message:['', this.formService.noWhitespaceValidator],
        terms: ['', Validators.requiredTrue]
      })

      this.getAffairList()
    } 


    else { //this.typeForm === 'postventas'
      this.contactForm = this.fb.group({
        full_name:['', this.formService.noWhitespaceValidator],
        email:['',  [this.formService.noWhitespaceValidator ,Validators.pattern(regexEmail)]],
        phone:['', Validators.compose([Validators.required, Validators.pattern(regexNumber)])],
        message:['', this.formService.noWhitespaceValidator],
        terms: ['', Validators.requiredTrue]
      })
    }

  }

  /**
   * Traer lista de asuntos
   */
  async getAffairList() {
    const affairList = await this.pageService.getElementsContent('titulo asunto contacto', 'asunto_contacto');
    if (affairList?.length > 0) this.affairList = affairList
  
  
  }


  async submitContactForm(){

    if(this.contactForm.valid){

      const {email, message, phone, full_name, affair} = this.contactForm.getRawValue();

      const data = {
        nombre: full_name,
        email,
        telefono: phone,
        page_section: this.typeForm,
        comentario: message,
        asunto: affair,
        correo_destinatario: this.recipient_mail
      }
      const response = await this.contactService.postContactForm(data)
      if (response?.resp){
        this.router.navigateByUrl(response?.resp, { state: { nameContact: full_name } })
      } else {
        alert('Opps ocurrió un error enviando el formulario')
      }
      this.contactForm.reset()

    } else {
      this.showErrors = true
    }
  }


  hasErrorsFieldForm(field:string): Boolean {
    const form = this.contactForm
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors)
  }
}
