import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternaRoutingModule } from './interna-routing.module';
import { InternaComponent } from './pages/interna/interna.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from "ng-recaptcha";

import { GoogleMapsModule } from '@angular/google-maps';
import { SafePipe } from 'src/app/shared/pipes/safe-resource-url.pipe';
import { SlideProjectsComponent } from 'src/app/shared/components/slide-projects/slide-projects.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    InternaComponent
  ],
  imports: [
    CommonModule,
    InternaRoutingModule,
    ComponentSharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,
    GoogleMapsModule,
    SafePipe,
    //standalones
    SlideProjectsComponent,
    BreadcrumbComponent,
    SafePipe
  ]
})
export class InternaModule { }
