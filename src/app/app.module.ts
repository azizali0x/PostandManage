import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MainComponent } from './components/main/main.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/addPost/addPost.component';
import { UserDataService } from './services/userData.service';
import { InfoPageComponent } from './components/infoPage/infoPage.component';
import { RemovePostDirective } from './components/posts/removePost.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    MainComponent,
    PostsComponent,
    AddPostComponent,
    InfoPageComponent,
    RemovePostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
