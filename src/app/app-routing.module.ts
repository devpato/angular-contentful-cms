import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsPageComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
