import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

declare function heroProyectos() : any;
declare function changeTab() : any;
declare function bannerProyectos() : any;
declare function bannerEjecutados() : any;

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  infoIsLoaded: boolean = false
  isBrowser:boolean  = false;

  constructor(@Inject(PLATFORM_ID) private plataformId : any, private router: Router) {
    this.isBrowser = isPlatformBrowser(this.plataformId)
  }

  goUpPage(top:number = 0){
    if (this.isBrowser) {
      window.scroll({
              top,
              left: 0,
              behavior: 'smooth'
      });
    }
  }

  redirectUrl(url: string = ""){
    if(url.includes('https://')){
      window.location.href = url
    } else if (url) {
      this.router.navigateByUrl(url)
    }
  }


  loadHeroProyectos(time = 0){
    if (this.isBrowser) {
      setTimeout(() => {
        heroProyectos()
      }, time);
    }
  }

  loadChangeTab(time = 0){
    if (this.isBrowser) {
      setTimeout(() => {
        changeTab()
      }, time);
    }
  }

  loadBannerProyectos(time = 0){
    if (this.isBrowser) {
      setTimeout(() => {
        bannerProyectos()
      }, time);
    }
  }

  loadbannerEjecutados(time = 0){
    if (this.isBrowser) {
      setTimeout(() => {
        bannerEjecutados()
      }, time);
    }
  }

  renderView404(skipLocationChange:boolean = true){
    this.router.navigateByUrl('404', { skipLocationChange });
    return false;
  }

  removeRepeatElementsArray(list:any[]): any[] {
    return [...new Set(list)];
  }
}
