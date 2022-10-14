import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViviendaRoutingModule } from './vivienda-routing.module';
import { ViviendaComponent } from './pages/vivienda/vivienda.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { ExecutedProjectsSlidePagComponent } from 'src/app/shared/components/executed-projects-slide-pag/executed-projects-slide-pag.component';


@NgModule({
  declarations: [
    ViviendaComponent
  ],
  imports: [
    CommonModule,
    ViviendaRoutingModule,
    ComponentSharedModule,
    HttpClientModule,
    BreadcrumbComponent,

    // components
    WppModalProjectComponent,
    ExecutedProjectsSlidePagComponent
  ]
})
export class ViviendaModule { }
