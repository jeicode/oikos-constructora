import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComercialesGuard } from 'src/app/core/guards/comerciales.guard';
import { ComercialesComponent } from './pages/comerciales/comerciales.component';

const routes: Routes = [
  {
    path: '',
    component: ComercialesComponent,
    canActivate: [ComercialesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialesRoutingModule { }
