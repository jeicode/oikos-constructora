import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { MapaComponent } from './pages/mapa/mapa.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    MapaComponent
  ],
  imports: [
    CommonModule,
    MapaRoutingModule,
    HttpClientModule,
    ComponentSharedModule
  ]
})
export class MapaModule { }
