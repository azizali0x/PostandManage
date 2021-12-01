import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { UserDataService } from 'src/app/services/userData.service';

@Directive({
  selector: '[appRemovePost]'
})
export class RemovePostDirective {

  constructor(public el : ElementRef, public render : Renderer2, User_Data : UserDataService) { }

  @HostListener('click')
  onClick(){
    this.render.parentNode(this.el.nativeElement).hidden = true;
  }

}
