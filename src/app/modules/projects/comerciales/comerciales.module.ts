import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialesRoutingModule } from './comerciales-routing.module';
import { ComercialesComponent } from './pages/comerciales/comerciales.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { ExecutedProjectsSlidePagComponent } from 'src/app/shared/components/executed-projects-slide-pag/executed-projects-slide-pag.component';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { ModalPreLaunchProjectComponent } from 'src/app/shared/components/modal-pre-launch-project/modal-pre-launch-project.component';
import { ThousandNumber } from 'src/app/shared/pipes/thousand-number.pipe';


@NgModule({
  declarations: [
    ComercialesComponent
  ],
  imports: [
    CommonModule,
    ComercialesRoutingModule,
    ComponentSharedModule,
    HttpClientModule,
    BreadcrumbComponent,
    ExecutedProjectsSlidePagComponent,
    WppModalProjectComponent,
    ModalPreLaunchProjectComponent,
    ThousandNumber
  ]
})
export class ComercialesModule { }
