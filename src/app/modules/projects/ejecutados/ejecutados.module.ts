import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecutadosRoutingModule } from './ejecutados-routing.module';
import { EjecutadosComponent } from './pages/ejecutados/ejecutados.component';
import { SlideProjectsComponent } from 'src/app/shared/components/slide-projects/slide-projects.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    EjecutadosComponent
  ],
  imports: [
    CommonModule,
    EjecutadosRoutingModule,
    //standalones
    SlideProjectsComponent,
    BreadcrumbComponent
  ]
})
export class EjecutadosModule { }
