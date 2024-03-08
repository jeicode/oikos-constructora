import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/pages/home-page/home-page.component').then( m => m.HomePageComponent)
  }, 
  {
    path: 'contactanos',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  }, 
  {
    path: 'gracias/:slug',
    loadChildren: () => import('./modules/thanks/thanks.module').then(m => m.ThanksModule)
  }, 
  {
    path: 'noticias-constructora',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'proyectos-construccion-vivienda',
    loadChildren: () => import('./modules/projects/vivienda/vivienda.module').then(m => m.ViviendaModule)
  },
  {
    path: 'proyectos-construccion-comerciales-industriales',
    loadChildren: () => import('./modules/projects/comerciales/comerciales.module').then( m => m.ComercialesModule )
  },
  {
    path: 'proyecto/:slug',
    loadChildren: () => import('./modules/projects/interna/interna.module').then(m => m.InternaModule)
  },
  {
    path: 'legales',
    loadChildren: () => import('./modules/legales/legales.module').then( m => m.LegalesModule )
  },{
    path: 'proyectos-ejecutados',
    loadChildren: () => import('./modules/projects/ejecutados/ejecutados.module').then( m => m.EjecutadosModule )
  },{
    path: 'pagos-constructora',
    loadChildren: () => import('./modules/pagos/pagos.module').then( m => m.PagosModule )
  },{
    path: 'mapa-del-sitio',
    loadChildren: () => import('./modules/mapa/mapa.module').then( m => m.MapaModule )
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
