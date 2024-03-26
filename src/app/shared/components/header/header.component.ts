import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { getElementsContent } from '../../services/apis/common.service';

@Component({
  standalone: true,
  imports:[NgClass, RouterLink],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  getElementsContent = getElementsContent()

  IMG_URL = signal(environment.imagenes_url)

  router = inject(Router)

  menuMobileIsActive = signal(false);

  homeIsActive = signal(true);
  suscribeListenRouter:WritableSignal<Subscription | undefined> = signal(undefined);
  
  // collections
  logos:WritableSignal<any> = signal([]);
  linksHeader:WritableSignal<any> = signal([]);

  constructor( ) {
    this.suscribeListenRouter.set(this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        if (this.router.url == '/') this.homeIsActive.set(true)
        else this.homeIsActive.set(false)
      }
    }))
  }

  ngOnInit(): void {
    this.getCollectionsPage();
  }

  ngOnDestroy(): void {
    this.suscribeListenRouter()?.unsubscribe()
  }


  closeNav(){
    this.menuMobileIsActive.set(false)
  }

  async getCollectionsPage(){
    const linksHeader = await this.getElementsContent( {name: 'titulo menu', content:'menu' });
    this.linksHeader.set(linksHeader);

    const logos = await this.getElementsContent( {name:"titulo empresa", content: "logos_empresas", condicional: "field_name='ver en header' AND field_content='2'"})
    this.logos.set(logos);
  }

}
