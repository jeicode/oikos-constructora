import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternaProyectoGuard } from 'src/app/core/guards/internaproyecto.guard';
import { InternaComponent } from './pages/interna/interna.component';

const routes: Routes = [
  {
    path: ':slug',
    component: InternaComponent,
    canActivate: [InternaProyectoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternaRoutingModule { }
