import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDataService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-addPost',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() newPost = new EventEmitter<boolean>();

  close(){
    this.newPost.emit(false)
  }
  title : string = '';
  author : string = '';
  category : string = '';
  categoryName : string = '';
  text : string = ''
  POST_ : Array<string> = []

  constructor( private USER_DATA : UserDataService) { }
  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   this.onSubmit()
  // }
  ngOnInit() {
  }
  currentUser : string = '';
  
  onSubmit(){
    this.newPost.emit(false)
    this.USER_DATA.currentUser.subscribe((data : any)=>{
      this.currentUser = data;
    })
    let storage : any = localStorage.getItem(this.currentUser);
    let storageJSON : any = JSON.parse(storage);

    //the arrangement matters from title - text
    //each index here is the same as index in the localStorage
    this.POST_.push(this.title);
    this.POST_.push(this.author);
    this.POST_.push(this.category);
    this.POST_.push(this.categoryName)
    this.POST_.push(this.text)
    storageJSON.posts.push(this.POST_);
    storageJSON = JSON.stringify(storageJSON)
    localStorage.setItem(String(this.currentUser),storageJSON)
    let postDetails : any = [];

    // this.POST_.forEach((data : any)=>{
    //   postDetails.push(new Array(thi));
    // })
    this.USER_DATA.setPostDetails(new Array(this.POST_));
  }
}
