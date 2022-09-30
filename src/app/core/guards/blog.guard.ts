import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { BlogService } from "src/app/shared/services/api/blog.service";
import { PageService } from "src/app/shared/services/api/page.service";
import { ConfigService } from "src/app/shared/services/functions/config.service";
import { SeoService } from "src/app/shared/services/functions/seo.service";


@Injectable({
    providedIn: 'root'
})
export class BlogGuard implements CanActivate {
    constructor(  private blogService: BlogService, 
                  private configServ: ConfigService,
                  private seoService: SeoService,
                  private pageService:PageService) { }

    async canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot):Promise<boolean> {

          const param = _route.params['numberPage'];

          // if we are in /noticias 
          if (!param){
            return this.defaultRender()
          } 
    
          // if we are in /noticias/pagina/:numPage
          const numPage = Number(param)
          if (!numPage || numPage > 5000) return this.configServ.renderView404()
          
          const blogs = await this.blogService.getMostRecentNews(`?num_pagina=${param}&limite=9`)
          
          if (blogs ){ 

            // if not exist more blogs
            if (blogs?.restantes <= 0 && !blogs?.notas) return this.configServ.renderView404()
            

            this.blogService.currentNumPage = param
            this.blogService.currentBlogs = blogs?.notas
            this.blogService.remainingPages = blogs?.restantes

            const seo = await this.pageService.getSeoContentPage('noticias')
            if (seo) this.seoService.setUpMetaTags(seo)
            return true
          }

          return this.configServ.renderView404()
    }



    async defaultRender(){
      const blogs = await this.blogService.getMostRecentNews(`?num_pagina=1&limite=9`)

      const seo = await this.pageService.getSeoContentPage('noticias')
      if (blogs){
        this.blogService.currentBlogs = blogs?.notas
        this.blogService.remainingPages = blogs?.restantes
      }
      if (seo) this.seoService.setUpMetaTags(seo)
      return true
}

}