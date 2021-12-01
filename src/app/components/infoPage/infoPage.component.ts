import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoPage',
  templateUrl: './infoPage.component.html',
  styleUrls: ['./infoPage.component.css']
})
export class InfoPageComponent implements OnInit {
  ngOnInit(): void {
    if(localStorage.length === 0){
      this.new = true;
    }else{
      this.new = false;
    }
  }
  new : boolean = true

  
}
