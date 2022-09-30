import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { DefaultImgDirective } from 'src/app/shared/directives/default-img.directive';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';


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

    //pipes
    DefaultImgDirective
  ]
})
export class BlogModule { }
