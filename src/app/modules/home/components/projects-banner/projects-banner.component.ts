import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerHome } from 'src/app/core/models/banner-home.model';
import { SortArrayStringSplitPipe } from 'src/app/shared/pipes/sort-array.pipe';
import { PageService } from 'src/app/shared/services/api/page.service';
import SwiperCore,{ Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';


const CommonModules = [NgStyle]

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-projects-banner',
  standalone: true,
  imports: [ 
    ...CommonModules,
    SwiperModule,
    NgOptimizedImage,
    RouterLink,

    SortArrayStringSplitPipe
  ],
  templateUrl: './projects-banner.component.html',
  styleUrls: ['../../home-page.component.css']

})
export class ProjectsBannerComponent implements OnInit {

  pageService = inject(PageService);
  bannersHome:WritableSignal<BannerHome[] > = signal([])

  config: SwiperOptions = {
    autoplay: {
        delay: 10000,
    },
    parallax:true,
    slidesPerView:1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    }
  }

  ngOnInit(): void {
    this.getBannersHome()
  }

  async getBannersHome(){
    const banners = await this.pageService.getBannersHome('titulo banner home', 'banner_home');
    this.bannersHome.set(banners)
  }
}
