import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.model';
import { BlogService } from 'src/app/shared/services/api/blog.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { environment } from 'src/environments/environment';


declare const $:any; 
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  BASE_URL:string = environment.base_url;
  activeBlog: Blog = new Blog();
  recentBlogs:Blog[] = []

  scrollPaginationIsActive:boolean = false;

  routerListener:Subscription;

  constructor(private blogService: BlogService, 
              private router: Router, 
              private configServ: ConfigService) {

    this.routerListener = this.router.events.subscribe(async (event:any) => {      
      if (event instanceof NavigationEnd  ) {
        this.activeBlog = this.blogService.activeBlog
        this.configServ.goUpPage()
      }
    });
  }

  ngOnInit(): void {
    this.getInterestNews()    
  }


  async getInterestNews(){
    const recentBlogs = await this.blogService.getMostRecentNews(`?num_pagina=1&limite=3`)
    if(recentBlogs) this.recentBlogs = recentBlogs?.notas
  }


  shareBy(share: 'linkedln' | 'fb' | 'twitter'){
    let link = ""
    const linkShare = window.location.href

    switch (share) {     
      case 'fb':
        link = `https://www.facebook.com/sharer/sharer.php?u=${linkShare}`
        break;
      
      case 'twitter':
        link = `https://twitter.com/intent/tweet?text=${linkShare}`
        break;
        
      case 'linkedln':
        link = `https://www.linkedin.com/sharing/share-offsite/?url=${linkShare}`
        break;
        
        }
      
        window.open(link, "_blank");
    }


    @HostListener('window:scroll', ['$event']) // for window scroll events
    configScrollPagination(){
      if($(window).width() > 1200){
          var scroll = $(window).scrollTop();
          if (scroll >= 420) {
              this.scrollPaginationIsActive = true
          } else {
            this.scrollPaginationIsActive = false
          }

        }

  }
  
}
