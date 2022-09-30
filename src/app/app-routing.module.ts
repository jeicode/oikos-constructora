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
    loadChildren: () => import('./modules/thanks/thanks.module').then(m => m.ThanksModule)
  }, 
  {
    path: 'noticias',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'proyectos-construccion-vivienda',
    loadChildren: () => import('./modules/projects/vivienda/vivienda.module').then(m => m.ViviendaModule)
  },
  {
    path: 'proyecto/:slug',
    loadChildren: () => import('./modules/projects/interna/interna.module').then(m => m.InternaModule)
  },{
    path: 'legales/:slug',
    loadChildren: () => import('./modules/legales/legales.module').then( m => m.LegalesModule )
  },{
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
