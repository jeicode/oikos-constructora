import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksGuard } from 'src/app/core/guards/thanks.guard';
import { ThanksComponent } from './pages/thanks/thanks.component';

const routes: Routes = [
  {
    path: '',
    component: ThanksComponent,
    canActivate: [ThanksGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThanksRoutingModule { }
