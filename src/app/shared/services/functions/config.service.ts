import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

declare function heroProyectos() : any;
declare function changeTab() : any;
declare function bannerProyectos() : any;
declare function bannerEjecutados() : any;

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  plataformId = inject(PLATFORM_ID)
  isBrowser:WritableSignal<boolean>  = signal( isPlatformBrowser(this.plataformId));
  router = inject(Router)


  goUpPage(top:number = 0){
    if (this.isBrowser()) {
      window.scroll({
              top,
              left: 0,
              behavior: 'smooth'
      });
    }
  }

  redirectUrl(url: string = ""){
    if (this.isBrowser()){
      if(url.includes('https://')){
        window.location.href = url
      } else if (url) {
        this.router.navigateByUrl(url)
      }
    }
  }


  loadHeroProyectos(time = 0){
    if (this.isBrowser()) {
      setTimeout(() => {
        heroProyectos()
      }, time);
    }
  }

  loadChangeTab(time = 0){
    if (this.isBrowser()) {
      setTimeout(() => {
        changeTab()
      }, time);
    }
  }

  loadBannerProyectos(time = 0){
    if (this.isBrowser()) {
      setTimeout(() => {
        bannerProyectos()
      }, time);
    }
  }

  loadbannerEjecutados(time = 0){
    if (this.isBrowser()) {
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

  isExternalUrl(url:string|undefined){
    if (url){
      return (url.split('',8).join('') === 'https://') || (url.split('',7).join('') === 'http://')
    } 
    return url
  }
}
