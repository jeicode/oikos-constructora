import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { ThanksComponent } from './pages/thanks/thanks.component';


@NgModule({
  declarations: [
    ThanksComponent
  ],
  imports: [
    CommonModule,
    ThanksRoutingModule,
    HttpClientModule,
    ComponentSharedModule
  ]
})
export class ThanksModule { }
