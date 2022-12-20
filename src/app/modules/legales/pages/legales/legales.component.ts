import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentSharedModule } from 'src/app/shared/components/components.module';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-legales',
  templateUrl: './legales.component.html',
  standalone: true,
  imports: [HttpClientModule, ComponentSharedModule, BreadcrumbComponent]
})
export class LegalesComponent implements OnInit {

  data                  : any = [];
  imagenes              : any = [];
  imagen_prin           : any = [];
  slug                  : string | null;
  suscribeListenRouter  : Subscription;

  constructor(private pageService: PageService, private router: Router, private configServ: ConfigService, private activateRoute: ActivatedRoute) {
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        this.slug = this.activateRoute.snapshot.paramMap.get('slug');
        this.configServ.goUpPage()
        this.getData();
      }
    });
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getData()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData(){
    this.data = await this.pageService.getPageContent(this.slug);
  }
}
