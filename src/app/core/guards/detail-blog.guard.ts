import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { BlogService } from "src/app/shared/services/api/blog.service";
import { ConfigService } from "src/app/shared/services/functions/config.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";


@Injectable({
    providedIn: 'root'
})
export class DeatilBlogGuard implements CanActivate {
    constructor(  private blogService: BlogService, 
                  private seoService: SeoService,
                  private configServ: ConfigService) { }

    async canActivate(
      _route: ActivatedRouteSnapshot,
      _state: RouterStateSnapshot):Promise<boolean> {
        
        const param = _route.params['slug'];
        const res = await this.blogService.getDetailNewBySlug(param); 

        if (res && res?.length > 0) {
          const [blog] = res
          if (blog) {
            this.seoService.setUpMetaTags(blog)
            this.blogService.activeBlog = blog
          }        
          return true
        } 

        return this.configServ.renderView404()
      
    }

}