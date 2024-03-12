import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Breadcrumb } from 'src/app/core/models/breadcrumb.model';
import { PageService } from '../../services/api/page.service';
import { ConfigService } from '../../services/functions/config.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  standalone: true,
  imports:[
    CommonModule,
    RouterModule
  ]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  @Input() cssClass:string = "";
  @Input() colorTxt:string = "" || "black"
  @Input() crumbTitle: string = "";
  @Input() breadcrumbs:Breadcrumb[] = []
  @Input() spliceRoutes:number[] = [];

  private paths:string[] = [];
  private ngOnInitFirstCalled:boolean = false;
  suscribeListenRouter:Subscription;

  configService = inject(ConfigService)

  rutas       : any = [];


  constructor(private router: Router, private pageService: PageService) {
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        if (this.ngOnInitFirstCalled){
          this.ngOnInit()
          this.mappingRoutes()
        }
      }
    });
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.suscribeListenRouter.unsubscribe()
  }

  async init(){
    const tasks = [
      () => this.getBreadCrumb()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getBreadCrumb(){
    if (this.configService.isBrowser()){
      this.rutas = await this.pageService.getBreadCrumb(window.location.href);
    }
  }


  /**
   * 
   * @returns 
   */
  mappingRoutes(){
    let linkBuilder = ''
    this.breadcrumbs = this.paths.map( p => {
      linkBuilder += `${p}/`
      const crumb = new Breadcrumb()
      crumb.title = this.capitalizeFirstLetter(p)
      crumb.link = linkBuilder
      return crumb
      
    })
  }
  
  /**
   * 
   * @param paths ex: '[noticias,proyectos]'
   * @returns 
   */
  deletePathsInRoute(){
    if (this.spliceRoutes.length > 0) {
      const [pos1, pos2] = this.spliceRoutes
      this.paths.splice(pos1, pos2)
    }
    return this.paths
  }


  /**
   * 
   * @returns 
   */
  clearPaths():string[]{
    return this.paths.map( p => p.replace(/-/ig, ' ')) // clear path
  }





  /**
   * Convert first letter to uppercase
   * @param title 
   * @returns 
   */
  capitalizeFirstLetter(title:string) {
    if (!title) return 'Oikos Constructora'
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
  

}
