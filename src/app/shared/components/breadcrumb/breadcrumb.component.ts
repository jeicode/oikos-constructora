import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  @Input() beforeCrumb:any;

  breadcrumbs:Breadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
