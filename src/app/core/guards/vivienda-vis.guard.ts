import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PageService } from "src/app/shared/services/api/page.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";

@Injectable({
    providedIn: 'root'
})
export class ViviendaVISGuard  {
    constructor(private pageService: PageService, private router: Router, private seoService: SeoService) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot):Promise<boolean> {

        const page = await this.pageService.getSeoContentPage('proyectos-construccion-vivienda-vis');

        if(page?.friendly_url!=null){
          this.pageService.currentPage = page
          this.seoService.setUpMetaTags(page)
          return true;
        }
        
        return false;
    }
}
