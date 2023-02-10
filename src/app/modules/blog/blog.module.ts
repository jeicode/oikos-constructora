import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { DefaultImgDirective } from 'src/app/shared/directives/default-img.directive';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { SlideProjectsComponent } from 'src/app/shared/components/slide-projects/slide-projects.component';

import { SafePipe } from 'src/app/shared/pipes/safe-resource-url.pipe'
import { AddComponent } from 'src/app/shared/directives/add-component.directive';


@NgModule({
  declarations: [
    BlogDetailComponent,
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,

    // standalones comp
    BreadcrumbComponent,
    SlideProjectsComponent,
    SafePipe,

    //pipes
    DefaultImgDirective,
    AddComponent
  ]
})
export class BlogModule { }
