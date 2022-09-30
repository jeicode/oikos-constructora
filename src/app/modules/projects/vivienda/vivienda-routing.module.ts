import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViviendaGuard } from 'src/app/core/guards/vivienda.guard';
import { ViviendaComponent } from './pages/vivienda/vivienda.component';

const routes: Routes = [
  {
    path: '',
    component: ViviendaComponent,
    canActivate: [ViviendaGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViviendaRoutingModule { }
