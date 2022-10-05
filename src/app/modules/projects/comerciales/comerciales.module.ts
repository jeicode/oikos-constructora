import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialesRoutingModule } from './comerciales-routing.module';
import { ComercialesComponent } from './pages/comerciales/comerciales.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ComercialesComponent
  ],
  imports: [
    CommonModule,
    ComercialesRoutingModule,
    ComponentSharedModule,
    HttpClientModule
  ]
})
export class ComercialesModule { }
