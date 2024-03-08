import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { PageService } from 'src/app/shared/services/api/page.service';
import { JsonLDService } from "src/app/shared/services/functions/json-ld.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";


export const homeGuard: CanActivateFn = async ( _route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
  const pageService = inject(PageService)
  const seoService = inject(SeoService);
  const jsonLD = inject(JsonLDService);

  const page = await pageService.getSeoContentPage('/');

  if (page) {
    seoService.setUpMetaTags(page)
    jsonLD.insertSchema(jsonLD.getHomeSchema(), { className: 'home_schema', id: 0 })
    return true
  }

  return false;
};