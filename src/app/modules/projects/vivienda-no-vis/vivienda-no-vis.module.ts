import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViviendaNoVisRoutingModule } from './vivienda-no-vis-routing.module';
import { ViviendaNoVisComponent } from './pages/vivienda-no-vis/vivienda-no-vis.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { ExecutedProjectsSlidePagComponent } from 'src/app/shared/components/executed-projects-slide-pag/executed-projects-slide-pag.component';
import { ModalPreLaunchProjectComponent } from 'src/app/shared/components/modal-pre-launch-project/modal-pre-launch-project.component';
import { ThousandNumber } from 'src/app/shared/pipes/thousand-number.pipe';


@NgModule({
  declarations: [
    ViviendaNoVisComponent
  ],
  imports: [
    CommonModule,
    ViviendaNoVisRoutingModule,
    BreadcrumbComponent,

    // components
    WppModalProjectComponent,
    ExecutedProjectsSlidePagComponent,
    ModalPreLaunchProjectComponent,
    ThousandNumber
  ]
})
export class ViviendaNoVisModule { }
