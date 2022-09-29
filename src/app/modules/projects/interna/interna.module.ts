import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternaRoutingModule } from './interna-routing.module';
import { InternaComponent } from './pages/interna/interna.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InternaComponent
  ],
  imports: [
    CommonModule,
    InternaRoutingModule,
    ComponentSharedModule,
    HttpClientModule
  ]
})
export class InternaModule { }
