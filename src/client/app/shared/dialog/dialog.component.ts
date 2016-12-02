import { Component,Input,ViewChild,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ValidationService } from './validation.service';
import { ControlMessagesComponent } from './control-messages.component';
import {Validationservice1} from './formvalidate';

@Component({
  selector : 'pop-up',
  directives:[ControlMessagesComponent,REACTIVE_FORM_DIRECTIVES],
  templateUrl : 'app/shared/dialog/dialog.component.html'

})
 export class DialogComponent  {
   @ViewChild(Validationservice1) userProfile: Validationservice1;
   //@ViewChild(Validationservice1) validation:Validationservice1;
   validation=new Validationservice1();
 public modalstatus:string = "none";
  public modalHideMandatoryInfo:boolean = false;
  public modalHideOptionalInfo:boolean = true;
 public popupopen:boolean=false;

 @Input() data : any;
  @Input() formdata : any;
  userform:FormGroup;
  userForm:FormGroup;
 formvalidator:any={};
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
 
constructor( private formBuilder:FormBuilder){   
      
   };


  modalPopupOpen() {
    this.modalstatus = 'block';
     this.formvalidator={}; // // this will clear the form  
    var valdations:any=this.validation.formData();
    if (this.formdata){
  var keys=Object.keys(this.formdata) //formdata keys wil cum 
for(var key in this.formdata) //display keys
{
  this.formvalidator[key]=[]; // we clear the errors
this.formvalidator[key].push(""); // push the values
  this.formvalidator[key].push(valdations[this.formdata[key]]);
}
   this.userform = this.formBuilder.group(this.formvalidator);
    this.popupopen=true;
    }
  }

  modalClickEvents(modalClickFunctionName:any) {
    if(modalClickFunctionName === 'modalPopupClose()') {
        this.modalPopupClose();
    }else if(modalClickFunctionName === 'modalMandatoryInfoHide()') {
        this.modalMandatoryInfoHide();
    }else if(modalClickFunctionName === 'modalOptionalInfoHide()') {
        this.modalOptionalInfoHide();
    } else if(modalClickFunctionName === 'modalPopupCreate()') {
      this.modalPopupCreate();
    }
  }
  modalPopupClose(){
    this.modalstatus = "none";
    this.modalHideMandatoryInfo = false;
    this.modalHideOptionalInfo = true; 
    this.popupopen=false; 
  }
  modalMandatoryInfoHide(){
        this.modalHideMandatoryInfo = true;
        this.modalHideOptionalInfo  = false;
    }

     modalOptionalInfoHide(){
         this.modalHideMandatoryInfo = false;
        this.modalHideOptionalInfo = true;
    }
   
    modalPopupCreate(){ 
    console.log('you created value:',this.userform.value );  
    this.userform.reset();
    this.modalstatus="none";
    this.popupopen=false; 
    }
  }
