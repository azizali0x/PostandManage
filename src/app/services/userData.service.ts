import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  currentUser : Subject<any> = new BehaviorSubject<string>('');

  setUser(data : any){
    this.currentUser.next(data);
  }

  postDetails : Subject<any> = new BehaviorSubject<any>('');
  setPostDetails( data : any){
    this.postDetails.next(data);
  }

constructor() { }

}
