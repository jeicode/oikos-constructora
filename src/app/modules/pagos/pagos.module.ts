import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { PagosComponent } from './pages/pagos/pagos.component';
import { LayoutModule } from 'src/app/shared/components/layout.module';
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
    LayoutModule,
    BreadcrumbComponent
  ]
})
export class PagosModule { }
