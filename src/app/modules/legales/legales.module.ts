import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalesRoutingModule } from './legales-routing.module';
import { LegalesComponent } from './pages/legales/legales.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    LegalesComponent
  ],
  imports: [
    CommonModule,
    LegalesRoutingModule,
    HttpClientModule,
    ComponentSharedModule
  ]
})
export class LegalesModule { }
