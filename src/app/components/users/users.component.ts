import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData : Array<string> = [];

  show : boolean = false;

   getUserData(userId : any){
     this.USER_DATA.setUser(String(userId));
   }

  status(event:any){
    this.show = event;
  }

   constructor(public USER_DATA : UserDataService , private router : Router) {
   }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

  ngOnInit() {
    if(localStorage.length !== 0){
      for (let data of Object.keys(localStorage)) {
        this.userData.push(data);
     }
    }
  }

}
