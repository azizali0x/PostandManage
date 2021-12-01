import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/addPost/addPost.component';
import { InfoPageComponent } from './components/infoPage/infoPage.component';
import { PostsComponent } from './components/posts/posts.component';
import { ReadComponent } from './components/read/read.component';

//main means where the component is going to be display
// main is the secondary router-outlet.

const routes: Routes = [
  {path:'',component:InfoPageComponent},
  {path:'user/:id',component:PostsComponent},
  {path:'post/:id',component:ReadComponent},
  {path:'**',component:InfoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
