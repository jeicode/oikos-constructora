import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Breadcrumb } from 'src/app/core/models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  standalone: true,
  imports:[
    CommonModule,
    RouterModule
  ]
})
export class BreadcrumbComponent implements OnInit {

  @Input() cssClass:string = "";
  @Input() colorTxt:string = "" || "black"
  @Input() crumbTitle: string = "";
  @Input() breadcrumbs:Breadcrumb[] = []
  @Input() numberRoutesToDelete:number = 0;
  @Input() test:number = 0

  constructor(private router: Router) {}


  
  ngOnInit(): void {
    
    let paths = this.router.url.split('/');
    const {paths:completePaths, crumbTitle} = this.deletePathsInRoute(paths)
    paths = completePaths;
    
    if (!this.crumbTitle)  {
      this.crumbTitle = this.capitalizeFirstLetter(crumbTitle[0])
    }
    
    let linkBuilder = ''
    this.breadcrumbs = paths.map( p => {

      linkBuilder += `${p}/`
      const crumb = new Breadcrumb()
      crumb.title = this.capitalizeFirstLetter(p)
      crumb.link = linkBuilder
      return crumb
      
    })
  }
  
  /**
   * 
   * @param paths ex: 'noticias/'
   * @returns 
   */
  deletePathsInRoute(paths:string[]){
    let pathsLen = paths.length
    if (this.numberRoutesToDelete && this.numberRoutesToDelete < pathsLen) {
      paths.splice( paths.length - this.numberRoutesToDelete, pathsLen)
    }
    
    const crumbTitle = paths.splice( pathsLen-1, pathsLen);
    return { paths, crumbTitle }
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
