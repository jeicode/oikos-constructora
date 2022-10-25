import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialesRoutingModule } from './comerciales-routing.module';
import { ComercialesComponent } from './pages/comerciales/comerciales.component';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { ExecutedProjectsSlidePagComponent } from 'src/app/shared/components/executed-projects-slide-pag/executed-projects-slide-pag.component';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';


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
    WppModalProjectComponent
  ]
})
export class ComercialesModule { }
