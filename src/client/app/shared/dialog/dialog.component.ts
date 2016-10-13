import {  Component , Input  } from '@angular/core';
@Component({
  selector: 'pop-up',
  templateUrl:'app/shared/dialog/dialog.component.html'
})
export class DialogComponent {
  public modalstatus:string = 'none';
  public hideElement:boolean = false;
  public hideElement1:boolean = true;
  @Input() data : any;
    userForm: any;
  onClickedExit() {
    this.modalstatus = 'block';
  }
  close() {
    this.modalstatus = 'none';
    this.hideElement = false;
    this.hideElement1 = true;
  }
  hideDiv() {
        this.hideElement = true;
        this.hideElement1 = false;
  }
  hideDiv1() {
         this.hideElement = false;
        this.hideElement1 = true;
  }
}