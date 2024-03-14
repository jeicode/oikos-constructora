import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { PagosComponent } from './pages/pagos/pagos.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { InternaPagosComponent } from './interna-pagos/pages/interna-pagos/interna-pagos.component';


@NgModule({
  declarations: [
    PagosComponent,
    InternaPagosComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule,
    BreadcrumbComponent
  ]
})
export class PagosModule { }
