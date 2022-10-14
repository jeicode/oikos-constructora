import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecutadosRoutingModule } from './ejecutados-routing.module';
import { EjecutadosComponent } from './pages/ejecutados/ejecutados.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { SlideProjectsComponent } from 'src/app/shared/components/slide-projects/slide-projects.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    EjecutadosComponent
  ],
  imports: [
    CommonModule,
    EjecutadosRoutingModule,
    HttpClientModule,
    ComponentSharedModule,

    //standalones
    SlideProjectsComponent,
    BreadcrumbComponent
  ]
})
export class EjecutadosModule { }
