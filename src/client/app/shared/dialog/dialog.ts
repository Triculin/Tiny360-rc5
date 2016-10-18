import { Component,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ValidationService } from './validation.service';
import { ControlMessagesComponent } from './control-messages.component';

@Component({
  selector : 'pop-up',
  directives:[ControlMessagesComponent,REACTIVE_FORM_DIRECTIVES],
  templateUrl : 'app/shared/dialog/dialog.component.html'

})
 export class DynamicCmp  {
 public modalstatus:string = "none";
 public hideElement:boolean = false;
 public hideElement1:boolean = true;
  // @Input() data : any;
  // @Input()  formdata : any;
  userForm:any;
data:any;
  shopformdata={
      'firstName': ['',[ Validators.required,ValidationService.firstNameValidator]],
      'lastName': ['',[Validators.required,ValidationService.lastNameValidator]],
      'dateOfJoined': ['', Validators.required],
      'Designation': ['', [Validators.required, Validators.minLength(3)]],
      'contactNumber':['',[Validators.required]]
    
    };
constructor(private formBuilder: FormBuilder){   
   this.data =[
                    {"formControlName":"firstName","name":"firstName","field":"mandatory","size":"col-xs-12 col-md-6","type":"text","placeholder":"First Name","id":"basicInput"   },
                    {"formControlName":"lastName","name":"lastName","field":"mandatory","size":"col-xs-12 col-md-6","type":"text","placeholder":"Last Name","id":"basicInput" },
                    {"formControlName":"dateOfJoined","name":"dateOfJoined","field":"mandatory","size":"col-xs-12 col-sm-4","type":"date","placeholder":"Date of Jonied","id":"basicInput"    },
                    {"formControlName":"Designation","name":"Designation","field":"mandatory","size":"col-xs-12 col-sm-4","type":"text","placeholder":"Designation","id":"basicInput"    },
                    {"formControlName":"contactNumber","name":"contactNumber","field":"mandatory","size":"col-xs-12 col-sm-4","type":"number","placeholder":"Contact Number","id":"basicInput"   },
                    {"name":"Address","field":"optional","size":"col-xs-12 col-sm-12","type":"text","placeholder":"Address","id":"basicInput"    },
                    {"name":"Landmark","field":"optional","size":"col-xs-12 col-sm-6","type":"text","placeholder":"Landmark","id":"basicInput"   },
                    {"name":"Location","field":"optional","size":"col-xs-12 col-sm-6","type":"text","placeholder":"Location","id":"basicInput"   },
                    {"name":"City","field":"optional","size":"col-xs-12 col-sm-4","type":"text","placeholder":"City","id":"basicInput"   },
                    {"name":"State","field":"optional","size":"col-xs-12 col-sm-4","type":"text","placeholder":"State","id":"basicInput" },
                    {"name":"PinCode","field":"optional","size":"col-xs-12 col-sm-4","type":"text","placeholder":"Pin Code","id":"basicInput"    }
        ];
        this.userForm = this.formBuilder.group(this.shopformdata);
   };


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