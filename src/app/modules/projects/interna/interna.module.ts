import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternaRoutingModule } from './interna-routing.module';
import { InternaComponent } from './pages/interna/interna.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from "ng-recaptcha";

import { SafePipe } from 'src/app/shared/pipes/safe-resource-url.pipe';
import { SlideProjectsComponent } from 'src/app/shared/components/slide-projects/slide-projects.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { SwiperModule } from 'swiper/angular';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { HTMLPipe } from 'src/app/shared/pipes/html-data.pipe';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    InternaComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    InternaRoutingModule,
    ComponentSharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,
    SafePipe,
    HTMLPipe,
    //standalones
    SlideProjectsComponent,
    BreadcrumbComponent,
    SwiperModule,
    WppModalProjectComponent
  ]
})
export class InternaModule { }
