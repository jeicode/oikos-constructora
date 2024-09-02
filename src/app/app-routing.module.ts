import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactGuard } from './core/guards/contact.guard';
import { homeGuard } from './core/guards/home.guard';
import { InternaProyectoGuard } from './core/guards/internaproyecto.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home-page.component').then(m => m.HomePageComponent),
    canActivate: [homeGuard]
  },
  {
    path: 'proyecto/:slug',
    loadComponent: () => import('./modules/projects/interna/interna.component').then(m => m.InternaComponent),
    canActivate: [InternaProyectoGuard]
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
    canActivate: [ContactGuard]
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
    path: 'proyectos-construccion-vivienda-vis',
    loadChildren: () => import('./modules/projects/vivienda-vis/vivienda-vis.module').then(m => m.ViviendaVisModule)
  },
  {
    path: 'proyectos-construccion-vivienda-no-vis',
    loadChildren: () => import('./modules/projects/vivienda-no-vis/vivienda-no-vis.module').then(m => m.ViviendaNoVisModule)
  },
  {
    path: 'proyectos-construccion-comerciales-industriales',
    loadChildren: () => import('./modules/projects/comerciales/comerciales.module').then(m => m.ComercialesModule)
  },
  {
    path: 'legales',
    loadChildren: () => import('./modules/legales/legales.module').then(m => m.LegalesModule)
  }, {
    path: 'proyectos-ejecutados',
    loadChildren: () => import('./modules/projects/ejecutados/ejecutados.module').then(m => m.EjecutadosModule)
  }, {
    path: 'pagos-constructora',
    loadChildren: () => import('./modules/pagos/pagos.module').then(m => m.PagosModule)
  }, {
    path: 'mapa-del-sitio',
    loadChildren: () => import('./modules/mapa/mapa.module').then(m => m.MapaModule)
  }, 
  {
    path: '**',
    loadComponent: () => import('../app/shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
  },
  {
    path: '404',
    loadComponent: () => import('../app/shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
