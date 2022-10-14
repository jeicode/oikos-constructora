import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/functions/config.service';

@Component({
  selector: 'app-interna-pagos',
  templateUrl: './interna-pagos.component.html',
  styleUrls: ['./interna-pagos.component.css']
})
export class InternaPagosComponent implements OnInit {

  data                  : any = [];
  imagenes              : string = '';
  suscribeListenRouter  : Subscription;
  slug                  : string | null;

  constructor(private pageService: PageService, private router: Router, private configServ: ConfigService, private activateRoute: ActivatedRoute) {
    this.imagenes = environment.imagenes_url
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        this.configServ.goUpPage()
      }
    });
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getSecciones()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getSecciones(){
    this.data = await this.pageService.getElementsContent('titulo seccion pagos', 'pagos', '', this.slug);
  }

}
