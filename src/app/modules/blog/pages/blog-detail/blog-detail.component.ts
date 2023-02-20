import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, ElementRef, HostBinding, HostListener, Injector, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.model';
import { Project } from 'src/app/core/models/project.model';
import { CardProjectComponent } from 'src/app/shared/components/card-project/card-project.component';
import { BlogService } from 'src/app/shared/services/api/blog.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { environment } from 'src/environments/environment';


declare const $: any;
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, AfterViewInit {

  @ViewChildren('proyectos_nota', { read: ViewContainerRef }) public containerProjects!: QueryList<ViewContainerRef>;


  BASE_URL: string = environment.imagenes_url;
  activeBlog: Blog = new Blog();
  recentBlogs: Blog[] = []

  scrollPaginationIsActive: boolean = false;

  routerListener: Subscription;

  constructor(private blogService: BlogService,
    private router: Router,
    private eleRef: ElementRef,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef,
    private projectService: ProjectService,
    public viewContainerRef: ViewContainerRef,
    private configServ: ConfigService) {
    this.routerListener = this.router.events.subscribe(async (event: any) => {
      if (event instanceof NavigationEnd) {
        this.activeBlog = this.blogService.activeBlog
        this.configServ.goUpPage()
      }
    });
  }


  ngAfterViewInit(): void {
    this.buildProjectsSection()
  }
  ngOnInit(): void {
    this.getInterestNews()
  }


  addDynamicCardProjectsComponent(containerElement:any, projects:Project[]) {
    let factory = this.resolver.resolveComponentFactory(CardProjectComponent);
    const ref = factory.create(this.injector, [], containerElement);
    this.app.attachView(ref.hostView);
    ref.instance.projects = projects;
  }


  async getInterestNews() {
    const recentBlogs = await this.blogService.getMostRecentNews(`?num_pagina=1&limite=3`)
    if (recentBlogs) this.recentBlogs = recentBlogs?.notas
  }


  async buildProjectsSection() {
    const elements:any = this.eleRef.nativeElement.querySelectorAll('.proyectos_nota')
    elements.forEach(async (e: any) => {
      // remove brackets
      const txtcontent: string = e.textContent.replace(/[{}]/g, '');
      const textids = txtcontent.split(':')[2] // get id1, id2, id3
      const projects = await this.projectService.getProjectsByIdList(textids)
      e.classList = e.className.replace('d_none', '')
      this.addDynamicCardProjectsComponent(e, projects);
    })
    
  }

  shareBy(share: 'linkedln' | 'fb' | 'twitter') {
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
  configScrollPagination() {
    if ($ && $(window).width() > 1200) {
      var scroll = $(window).scrollTop();
      if (scroll >= 420) {
        this.scrollPaginationIsActive = true
      } else {
        this.scrollPaginationIsActive = false
      }

    }

  }

}
