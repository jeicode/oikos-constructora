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
import { CurrencyConverterService } from 'src/app/shared/services/api/currency-converter.service';
import { ThousandNumber } from "../../../../shared/pipes/thousand-number.pipe";


SwiperCore.use([Pagination]);

@Component({
  selector: 'app-projects-banner',
  standalone: true,
  imports: [
    SwiperModule,
    NgStyle,
    NgOptimizedImage,
    RouterLink,
    SortArrayStringSplitPipe,
    ThousandNumber
  ],
  templateUrl: './projects-banner.component.html',
  styleUrls: ['./projects-banner.component.css'],

})
export class ProjectsBannerComponent implements OnInit {

  idxActiveBanner = signal(0);
  getBannersHome = getBannersHome();

  configService = inject(ConfigService);

  IMG_URL = signal(environment.imagenes_url);
  bannerHome: BannerHome[] = [];

  config: WritableSignal<SwiperOptions> = signal({
    parallax: true,
    slidesPerView: 1,
    effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  })

  constructor(private currencyConverter: CurrencyConverterService) { };

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.getBannersHome({ name: 'titulo banner home', content: 'banner_home' }).then((res: any) => {
      this.bannerHome = res;
      this.convertCopToUsdProjects();
    });

  }

  async convertCopToUsdProjects() {
    this.currencyConverter.convertCopToUsd(this.bannerHome);
  }

  changeActive([event]: any) {
    this.idxActiveBanner.set(event.activeIndex);
  }

}
