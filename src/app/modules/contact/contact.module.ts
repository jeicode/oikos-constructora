import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CalculateFormComponent } from './components/calculate-form/calculate-form.component';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,

    // standalones
    BreadcrumbComponent,
    ContactFormComponent,
    CalculateFormComponent
  ]
})
export class ContactModule { }
