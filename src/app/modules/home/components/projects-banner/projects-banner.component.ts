import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerHome } from 'src/app/core/models/banner-home.model';
import { SortArrayStringSplitPipe } from 'src/app/shared/pipes/sort-array.pipe';
import { CsService } from 'src/app/shared/services/functions/cs.service';
import { environment } from 'src/environments/environment';
import { getBannersHome } from 'src/app/shared/services/apis/common.service';
import SwiperCore, { Lazy, Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';


SwiperCore.use([Navigation, Pagination, Lazy]);


@Component({
  selector: 'app-projects-banner',
  standalone: true,
  imports: [
    SwiperModule,

    NgStyle,
    NgOptimizedImage,
    RouterLink,

    SortArrayStringSplitPipe
  ],
  templateUrl: './projects-banner.component.html',
  styleUrls: ['../../home-page.component.css'],

})
export class ProjectsBannerComponent implements OnInit {
  
  cs = inject(CsService);
  getBannersHome = getBannersHome();

  IMG_URL = signal(environment.imagenes_url)
  bannerHome: any = []
  bannersHome: WritableSignal<BannerHome[]> = signal([])

  config: WritableSignal<SwiperOptions> = signal({
    lazy: {
      loadPrevNext: true
    },
    autoplay: {
      delay: 10000,
    },
    parallax: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  })



  ngOnInit(): void {
    this.getBannersHome({name: 'titulo banner home', content: 'banner_home'}).then((res:any) => {
      this.bannersHome.set(res)
      this.cs.loadCEvent.update(i => i.concat('app-projects-banner'))
    })

  }

}
