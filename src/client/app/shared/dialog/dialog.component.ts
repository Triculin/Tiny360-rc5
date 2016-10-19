import {  Component , Input  } from '@angular/core';
@Component({
  selector: 'pop-up',
  templateUrl:'app/shared/dialog/dialog.component.html'
})
export class DialogComponent {
  public modalstatus:string = 'none';
  public modalHideMandatoryInfo:boolean = false;
  public modalHideOptionalInfo:boolean = true;
  @Input() data : any;
  modalPopupOpen() {
    this.modalstatus = 'block';
  }
  modalClickEvents(modalClickFunctionName:any) {
    if(modalClickFunctionName === 'modalPopupClose()') {
        this.modalPopupClose();
    }else if(modalClickFunctionName === 'modalMandatoryInfoHide()') {
        this.modalMandatoryInfoHide();
    }else if(modalClickFunctionName === 'modalOptionalInfoHide()') {
        this.modalOptionalInfoHide();
    }
  }
  modalPopupClose() {
    this.modalstatus = 'none';
    this.modalHideMandatoryInfo = false;
    this.modalHideOptionalInfo = true;
  }
  modalMandatoryInfoHide() {
        this.modalHideMandatoryInfo = true;
        this.modalHideOptionalInfo = false;
  }
  modalOptionalInfoHide() {
         this.modalHideMandatoryInfo = false;
        this.modalHideOptionalInfo = true;
  }
}
