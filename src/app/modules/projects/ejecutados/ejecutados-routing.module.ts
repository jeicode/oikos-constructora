import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjecutadosGuard } from 'src/app/core/guards/ejecutados.guard';
import { EjecutadosComponent } from './pages/ejecutados/ejecutados.component';

const routes: Routes = [
  {
    path: '',
    component: EjecutadosComponent,
    canActivate: [EjecutadosGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecutadosRoutingModule { }
