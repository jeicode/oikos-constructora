import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGuard } from 'src/app/core/guards/blog.guard';
import { DeatilBlogGuard } from 'src/app/core/guards/detail-blog.guard';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

const routes: Routes = [

  {
    path:'',
    component: BlogPageComponent,
    canActivate:[BlogGuard]
  },

  {
    path:'pagina/:numberPage',
    component: BlogPageComponent,
    canActivate:[BlogGuard]
  },

  {
    path:':slug',
    component: BlogDetailComponent,
    canActivate: [DeatilBlogGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
