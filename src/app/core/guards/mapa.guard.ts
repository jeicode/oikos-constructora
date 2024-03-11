import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PageService } from 'src/app/shared/services/api/page.service';
import { SeoService } from "src/app/shared/services/functions/seo.service";

@Injectable({
    providedIn: 'root'
})
export class MapaGuard  {
    constructor(  private pageService: PageService, 
                  private seoService: SeoService) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot):Promise<boolean> {
    
          const page = await this.pageService.getSeoContentPage('mapa-del-sitio');
          
          if (page) {
            this.pageService.currentPage = page
            this.seoService.setUpMetaTags(page)
            return true
          }

          return false;
      }
}