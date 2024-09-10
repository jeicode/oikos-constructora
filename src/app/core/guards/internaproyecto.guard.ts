import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProjectService } from "src/app/shared/services/api/project.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";

@Injectable({
    providedIn: 'root'
})
export class InternaProyectoGuard  {
    constructor(private projService: ProjectService, private router: Router, private seoService: SeoService) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot): Promise<boolean> {
        const slug = _route.params['slug']
        const [data = null] = await this.projService.getProyectoByUrl(slug);
        if (data) {
            this.projService.project = data
            this.seoService.setUpMetaTags(data)
            return true;
        }

        this.router.navigateByUrl('404', { skipLocationChange: true });
        return false;
    }
}
