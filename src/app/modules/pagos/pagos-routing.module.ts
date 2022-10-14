import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternaPagosComponent } from './interna-pagos/pages/interna-pagos/interna-pagos.component';
import { PagosComponent } from './pages/pagos/pagos.component';

const routes: Routes = [
  {
    path: '',
    component: PagosComponent
  },{
    path: ':slug',
    component: InternaPagosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosRoutingModule { }
