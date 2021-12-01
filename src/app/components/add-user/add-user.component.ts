import { Component, DoCheck, EventEmitter, Output} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/userData.service';
import { User } from './user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements DoCheck,User {

  @Output() show = new EventEmitter<boolean>();

  email = new FormControl('', Validators.email)

  name =  '';
  post = [];
  telNumber = 0;
  constructor() { }

  close(){
    this.show.emit(false)
  }
  ngDoCheck(): void {
    //making app to refresh
  }

  regetEmail : boolean = false;

  regetNumber : boolean = false;

  onSubmit(){

    let mail = false;
    let num = false;
    if(localStorage.getItem(String(this.email.value)) || this.email.value === ''){
      this.regetEmail = true;
      setTimeout(() => {
         this.regetEmail = false
      },2000);
      //validating data before submitting
    }else{
      mail = true
    }
    let store : any = localStorage
    for (let key of Object.keys(store)) {
      let k : any = JSON.parse(store[key])
      if(k.telNumber == this.telNumber){
        this.regetNumber = true;
        setTimeout(() => {
          this.regetNumber = false;
        }, 2000);
      }else{
        num = true;
      }
    }
    if(!(this.regetEmail && this.regetNumber)){
      const USER_DATA : any = {
      };
      USER_DATA.name = this.name;
      USER_DATA.email = this.email.value;
      USER_DATA.telNumber = this.telNumber;
      USER_DATA.posts = this.post
      this.show.emit(false);
      localStorage.setItem(this.email.value,JSON.stringify(USER_DATA));
    }
    if(!(this.regetEmail && this.regetNumber)){
      return window.location.reload();
    }
  }
}
