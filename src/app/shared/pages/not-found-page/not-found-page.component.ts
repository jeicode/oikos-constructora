import { Component, Inject, OnInit, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RESPONSE } from '@nguniversal/express-engine/tokens'
import { Response } from 'express';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  standalone: true,
  imports:[
    RouterModule,

    BreadcrumbComponent
  ]
})
export class NotFoundPageComponent implements OnInit {

  private response: Response

  constructor(@Optional()
              @Inject(RESPONSE)
              response: any) {
    this.response = response
  }

  ngOnInit(): void {
    if (this.response) this.response.statusCode = 404;
  }

}
