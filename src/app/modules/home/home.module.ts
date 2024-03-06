import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SwiperModule } from 'swiper/angular';
import { DefaultImgDirective } from 'src/app/shared/directives/default-img.directive';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { ModalPreLaunchProjectComponent } from 'src/app/shared/components/modal-pre-launch-project/modal-pre-launch-project.component';
import { SortArrayStringSplitPipe } from 'src/app/shared/pipes/sort-array.pipe';
import { ThousandNumber } from 'src/app/shared/pipes/thousand-number.pipe';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    DefaultImgDirective,
    NgOptimizedImage,
    WppModalProjectComponent,
    ModalPreLaunchProjectComponent,
    SortArrayStringSplitPipe,
    ThousandNumber
  ]
})
export class HomeModule { }
