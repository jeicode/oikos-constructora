import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { PageService } from 'src/app/shared/services/api/page.service';
import { JsonLDService } from "src/app/shared/services/functions/json-ld.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";

@Injectable({
    providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    constructor(  private pageService: PageService, 
                  private jsonLD: JsonLDService,
                  private seoService: SeoService) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot):Promise<boolean> {
    
          const page = await this.pageService.getSeoContentPage('/');
          
          if (page) {
            this.pageService.currentPage = page
            this.seoService.setUpMetaTags(page)
            this.jsonLD.insertSchema(this.jsonLD.getHomeSchema(), {className:'home_schema', id:0})
            return true
          }

          return false;
      }
}