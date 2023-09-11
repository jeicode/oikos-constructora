import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

declare var $:any;
@Component({
  standalone: true,
  imports:[NgFor, NgClass, NgIf, ReactiveFormsModule, RouterModule],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  BASE_URL:string = environment.imagenes_url;
  menuMobileIsActive:boolean = false;

  homeIsActive          : boolean = false;
  suscribeListenRouter  : Subscription;
  
  // collections
  logos: any = [];
  linksHeader:any[] = []

  constructor(private pageService: PageService, private router: Router) {
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        if (router.url == '/') this.homeIsActive = true
        else this.homeIsActive = false
      }
    });
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getCollectionsPage()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  closeNav(){
    if($(".btn_menu_movil").hasClass('active')){
      $(".btn_menu_movil").click();
    }
  }

  async getCollectionsPage(){

    const linksHeader = await this.pageService.getElementsContent('titulo menu', 'menu');
    if (linksHeader && linksHeader?.length > 0) {
      this.linksHeader = linksHeader
    }
    const logos = await this.pageService.getElementsContent("titulo empresa", "logos_empresas", "field_name='ver en header' AND field_content='2'")
    if (logos && logos?.length > 0) this.logos = logos
  }



  toogleActiveMenuMobile(){
    this.menuMobileIsActive = !this.menuMobileIsActive
  }


}
