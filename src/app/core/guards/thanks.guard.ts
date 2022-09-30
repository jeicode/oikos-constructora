import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { PageService } from "src/app/shared/services/api/page.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";

@Injectable({
    providedIn: 'root'
})
export class ThanksGuard implements CanActivate {
    constructor(private pageService: PageService, private router: Router, private seoService: SeoService) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot):Promise<boolean> {
        const slug = _route.params['slug']

        const page = await this.pageService.getSeoContentPage(slug);

        if(page?.friendly_url!=null){
          this.pageService.currentPage = page
          this.seoService.setUpMetaTags(page)
          return true;
        }

        this.router.navigateByUrl('404', { skipLocationChange: true });
        return false;
    }
}
