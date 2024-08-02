import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactGuard } from 'src/app/core/guards/contact.guard';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
