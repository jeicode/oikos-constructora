import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.model';
import { BlogService } from 'src/app/shared/services/api/blog.service';
import { ResponsiveService } from 'src/app/shared/services/functions/responsive.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  BASE_URL = environment.base_url

  //pagination
  numPage:number = 1;
  remainingPages:number = 0
  
  // blogs
  mainBlog:Blog = new Blog()
  secondMainNews:Blog[] = []
  interestBlogs:Blog[] = []
  blogs:Blog[] = []

  numberRoutesToDelete:number = 2;

  routerListener:Subscription;

  constructor(private blogService: BlogService, private router: Router, 
              public responsiveService: ResponsiveService,
              @Inject(DOCUMENT) private doc: Document) {
    this.routerListener = this.router.events.subscribe(async (event:any) => {      
      if (event instanceof NavigationEnd  ) {

        if (router.url.includes('pagina/')) this.numberRoutesToDelete = 2
        this.blogs = this.blogService.currentBlogs
        this.numPage = this.blogService.currentNumPage
        this.remainingPages = this.blogService.remainingPages
      }
    });
  }


  ngOnInit(): void {
    this.init()
  }


  async init(){
    const tasks = [
      () => this.getMainNew(),
      () => this.getSecondMainNews(),
      () => this.getInterestNews()
    ]


    for (const task of tasks) {
      await task();
    }
  }


  async getMainNew(){
    const mainBlog = await this.blogService.getMainNew()
    if (mainBlog) this.mainBlog = mainBlog
  }


  async getSecondMainNews(){
    const secondMainNews = await this.blogService.getSecondMainNews()
    if (secondMainNews) this.secondMainNews = secondMainNews
  }


  async getInterestNews(){
    const interestBlogs = await this.blogService.getInterestNews()
    if(interestBlogs) this.interestBlogs = interestBlogs
    
  }


  nextPage(){
    if (this.remainingPages > 0) {
      this.numPage++;
      this.router.navigate(['/noticias/pagina/', this.numPage]);
      this.doc.getElementById("pageUp")?.scrollIntoView();

    }
  }

  beforePage(){
    if (this.numPage > 1){
      this.numPage--;
      this.router.navigate(['/noticias/pagina/', this.numPage]);
      this.doc.getElementById("pageUp")?.scrollIntoView();
    }
  }

}
