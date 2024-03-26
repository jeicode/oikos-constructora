import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BlogService } from "src/app/shared/services/api/blog.service";
import { ConfigService } from "src/app/shared/services/functions/config.service";
import { JsonLDService } from "src/app/shared/services/functions/json-ld.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";


@Injectable({
    providedIn: 'root'
})
export class DeatilBlogGuard  {
    constructor(  private blogService: BlogService, 
                  private jsonLD: JsonLDService,
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
            const schema = this.jsonLD.getBlogSchema(blog);
            this.jsonLD.insertSchema(schema, {id:blog.id, className:'new_schema'});
            return true
          }  
        } 
        return this.configServ.renderView404()
      
    }

}