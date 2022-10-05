import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { SlideProjectsComponent } from 'src/app/shared/components/slide-projects/slide-projects.component';


@NgModule({
  declarations: [
    ThanksComponent
  ],
  imports: [
    CommonModule,
    ThanksRoutingModule,
    HttpClientModule,
    ComponentSharedModule,
    // standolnes
    SlideProjectsComponent
  ]
})
export class ThanksModule { }
