import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaGuard } from 'src/app/core/guards/mapa.guard';
import { MapaComponent } from './pages/mapa/mapa.component';

const routes: Routes = [
  {
    path: '',
    component: MapaComponent,
    canActivate: [MapaGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
