import { Component, OnInit } from '@angular/core'
import { UserDataService } from 'src/app/services/userData.service'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private USER_DATA : UserDataService) { }
  post : any = [];
  ngOnInit() {
    this.USER_DATA.postDetails.subscribe((data :any)=>{
      data.forEach((data : any) => {
        data.forEach((element : any) => {
          this.post.push(element);
        });
      });
    })
  }
  touch : boolean = false;
  btn : boolean = false;
  edit(){
    this.btn == true ? this.btn = false : this.btn = true;
   this.touch == true ? this.touch = false : this.touch = true;
  }

  title : any = '';
  author : any = '';
  name : any = "";
  number : any = "";
  text(data : any){
    console.log(data)
  }
  update(){
    let user : any = '';
    this.USER_DATA.currentUser.subscribe((data : any)=>{
      user = data;
    })
    let storage : any = localStorage.getItem(String(user));
    let storageJSON = JSON.parse(storage);
    console.log(this.author)

  }
}
