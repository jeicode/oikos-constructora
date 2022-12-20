import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalesGuard } from 'src/app/core/guards/legales.guard';
import { NotFoundPageComponent } from 'src/app/shared/pages/not-found-page/not-found-page.component';
import { LegalesComponent } from './pages/legales/legales.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent
  },{
    path: ':slug',
    component: LegalesComponent,
    canActivate: [LegalesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalesRoutingModule { }
