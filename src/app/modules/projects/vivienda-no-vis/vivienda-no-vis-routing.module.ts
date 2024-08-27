import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViviendaNoVisComponent } from './pages/vivienda-no-vis/vivienda-no-vis.component';
import { ViviendaNoVISGuard } from 'src/app/core/guards/vivienda-no-vis.guard';

const routes: Routes = [
  {
    path: '',
    component: ViviendaNoVisComponent,
    canActivate: [ViviendaNoVISGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViviendaNoVisRoutingModule { }
