import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerHome } from 'src/app/core/models/banner-home.model';
import { SortArrayStringSplitPipe } from 'src/app/shared/pipes/sort-array.pipe';
import { environment } from 'src/environments/environment';
import { getBannersHome } from 'src/app/shared/services/apis/common.service';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { ConfigService } from 'src/app/shared/services/functions/config.service';


SwiperCore.use([Pagination]);

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
  styleUrls: ['./projects-banner.component.css'],

})
export class ProjectsBannerComponent implements OnInit {

  idxActiveBanner = signal(0)
  getBannersHome = getBannersHome();

  configService = inject(ConfigService)

  IMG_URL = signal(environment.imagenes_url)
  bannerHome: any = []
  bannersHome: WritableSignal<BannerHome[]> = signal([])

  config: WritableSignal<SwiperOptions> = signal({
    parallax: true,
    slidesPerView: 1,
    effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  })



  ngOnInit(): void {
    this.getBannersHome({ name: 'titulo banner home', content: 'banner_home' }).then((res: any) => {
      this.bannersHome.set(res)
    })

  }

  changeActive([event]: any) {
    this.idxActiveBanner.set(event.activeIndex)
  }

}
