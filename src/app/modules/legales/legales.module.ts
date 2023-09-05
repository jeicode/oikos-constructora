import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalesRoutingModule } from './legales-routing.module';
import { LegalesComponent } from './pages/legales/legales.component';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    LegalesComponent
  ],
  imports: [
    CommonModule,
    LegalesRoutingModule,
    HttpClientModule,
    // components
    BreadcrumbComponent
  ]
})
export class LegalesModule { }
