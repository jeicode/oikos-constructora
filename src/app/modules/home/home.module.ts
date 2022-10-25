import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SwiperModule } from 'swiper/angular';
import { DefaultImgDirective } from 'src/app/shared/directives/default-img.directive';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SwiperModule,
    DefaultImgDirective,
    WppModalProjectComponent
  ]
})
export class HomeModule { }
