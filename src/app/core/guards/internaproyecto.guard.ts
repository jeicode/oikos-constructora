import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { PageService } from "src/app/shared/services/api/page.service";
import { ProjectService } from "src/app/shared/services/api/project.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";

@Injectable({
    providedIn: 'root'
})
export class InternaProyectoGuard implements CanActivate {
    constructor(private pageService: PageService, private projService: ProjectService, private router: Router, private seoService: SeoService) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot): Promise<boolean> {
        const slug = _route.params['slug']
        const page = await this.projService.getSeoContentProject(slug);

        if (page?.friendly_url) {
            this.pageService.currentPage = page
            this.seoService.setUpMetaTags(page)
            return true;
        }

        this.router.navigateByUrl('404', { skipLocationChange: true });
        return false;
    }
}
