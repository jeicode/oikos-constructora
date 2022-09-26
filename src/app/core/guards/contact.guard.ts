import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { PageService } from 'src/app/shared/services/api/page.service';
import { SeoService } from "src/app/shared/services/functions/seo.service";

@Injectable({
    providedIn: 'root'
})
export class ContactGuard implements CanActivate {
    constructor(  private pageService: PageService, 
                  private seoService: SeoService,
                  private router: Router) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot):Promise<boolean> {
    
          const page = await this.pageService.getSeoContentPage('contactenos');
          
          if (page) {
            this.pageService.currentPage = page
            this.seoService.setUpMetaTags()
            return true
          }

          this.router.navigateByUrl('404', { skipLocationChange: true });
          return false;
      }
}