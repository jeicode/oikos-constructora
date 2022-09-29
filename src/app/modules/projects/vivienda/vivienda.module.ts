import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViviendaRoutingModule } from './vivienda-routing.module';
import { ViviendaComponent } from './pages/vivienda/vivienda.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViviendaComponent
  ],
  imports: [
    CommonModule,
    ViviendaRoutingModule,
    ComponentSharedModule,
    HttpClientModule
  ]
})
export class ViviendaModule { }
