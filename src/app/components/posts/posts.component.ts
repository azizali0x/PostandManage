import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserDataService } from 'src/app/services/userData.service';
import { UserPost } from './userPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, UserPost{

  newPost : boolean = false;

  //check current user
  constructor(public USER_DATA : UserDataService) {

  }
  name: string = '';
  email: string ='';
  telNumber: number = 0;
  posts : Array<any> = [];

  //updating storage after editing
  namx : string = this.name;
  numx : number = this.telNumber;
  mailx : string = this.email;
  updateProfile(){
    this.store.name = this.mailx;
    this.store.telNumber = this.numx;
    this.store.email = this.mailx
    localStorage.setItem(String(this.mailx),JSON.stringify(this.store))
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }
  //refer to posts to make sense of this
  arr : any = '';
  status(event : any){
    this.newPost = event;
  }
  name_ : boolean = false;

  edit(){
    this.name_ === true ? this.name_ = false : this.name_ = true;
  }

  //deleting post from view/localhost
  store : any; //mainly for removing elements
  currentUser : any = ''
  deletePost(value : any){
    let post : Array<any> = this.store.posts;
    post.splice(value,1);
    localStorage.setItem(String(this.currentUser),JSON.stringify(this.store))
  }

  view(){
    this.USER_DATA.setPostDetails(this.posts);
  }

  deleteUser(value : any){
   localStorage.removeItem(value);
  }
  ngOnInit(): void {
    this.USER_DATA.currentUser.subscribe((data : any)=>{
       this.currentUser = data;
    })


    let storage : any = localStorage.getItem(String(this.currentUser));

    //parsing storage directly causes errors
    //below is the best method
    let storageJSON : any = JSON.parse(storage)
    this.store = storageJSON;

    // updating view from host
    for (let data in storageJSON) {
      data == 'name' ? this.name = storageJSON[data] : 0;
      data == "email" ? this.email = storageJSON[data] : 0;
      data == 'telNumber' ? this.telNumber = storageJSON[data] : 0;
      data == "posts" ? this.posts = storageJSON[data] : 0;
      if(data == 'posts'){
        this.arr = storageJSON[data];
        this.posts = [...this.arr]
      }

    }

  }
}
