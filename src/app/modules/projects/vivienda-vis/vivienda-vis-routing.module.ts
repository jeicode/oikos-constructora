import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViviendaVisComponent } from './pages/vivienda-vis/vivienda-vis.component';
import { ViviendaVISGuard } from 'src/app/core/guards/vivienda-vis.guard';

const routes: Routes = [
  {
    path: '',
    component: ViviendaVisComponent,
    canActivate: [ViviendaVISGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViviendaVisRoutingModule { }
