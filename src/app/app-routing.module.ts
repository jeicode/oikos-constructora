import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, 
  {
    path: 'contactenos',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  }, 
  {
    path: 'gracias/:slug',
    loadChildren: () => import('./shared/pages/thanks/thanks.component').then(m => m.ThanksComponent)
  }, 
  {
    path: 'noticias',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }, 
  {
    path: '404',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
