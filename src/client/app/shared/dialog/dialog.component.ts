import {  Component , Input ,ViewChild,OnInit  } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'pop-up',
  templateUrl:'app/shared/dialog/dialog.component.html'
})
export class DialogComponent implements OnInit {
  public modalstatus:string = 'none';
  public modalHideMandatoryInfo:boolean = false;
  public modalHideOptionalInfo:boolean = true;
  @Input() data : any;
  formSingle: FormGroup;
  multipleSingle: boolean = false;
  optionsSingle: Array<any> = [];
  formMultiple: FormGroup;
  multipleMultiple: boolean = true;
  optionsMultiple: Array<any> = [];
  allowClear: boolean = true;
  @ViewChild('singleSelectComponent') singleSelectComponent:any;
  @ViewChild('multipleSelectComponent') multipleSelectComponent:any;
  ngOnInit() {
    this.formSingle = new FormGroup({});
    this.formSingle.addControl('selectSingle', new FormControl());
    this.formMultiple = new FormGroup({});
    this.formMultiple.addControl('selectMultiple', new FormControl());
  }
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
    this.formSingle.reset();
    this.formMultiple.reset();
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