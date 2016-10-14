import { Component,Input, DynamicComponentLoader, ElementRef, ComponentRef,Injector,ContentChildren,QueryList} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ValidationService } from './validation.service';
import { ControlMessagesComponent } from './control-messages.component';

@Component({
  selector : 'dialog-form',
  directives:[ControlMessagesComponent,REACTIVE_FORM_DIRECTIVES],
  templateUrl : 'app/shared/dialog/dialog.component.html'

})
 export class DynamicCmp {
  _idx: number;
 public modalstatus:string = "none";
 public hideElement:boolean = false;
 public hideElement1:boolean = true;
  @Input()  data : any;
   userForm: any;  
    constructor(private formBuilder: FormBuilder){
      this.userForm = this.formBuilder.group({
     'firstName': ['',[ Validators.required,ValidationService.firstNameValidator]],
      'lastName': ['',Validators.required],
      'dateOfJoined': ['', Validators.required],
      'Designation': ['', [Validators.required, Validators.minLength(10)]],
      'contactNumber':['',[Validators.required, Validators.minLength(10)]]
    });
    }
  
//   saveUser() {
//     if (this.userForm.dirty && this.userForm.valid) {
//       alert(Name: ${this.userForm.value.name} Email: ${this.userForm.value.email});
//     }
//   }
  onClickedExit() {
    this.modalstatus = "block";
  }

  close(){
    this.modalstatus = "none";
    this.hideElement = false;
    this.hideElement1 = true;
  }
  hideDiv(){
        this.hideElement = true;
        this.hideElement1 = false;
    }

    hideDiv1(){
         this.hideElement = false;
        this.hideElement1 = true;
    }
   
  
}