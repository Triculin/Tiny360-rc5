import {Component} from '@angular/core';
import { Dialog} from '../shared/dialog/dialog.component';
import { DynamicCmp} from '../shared/dialog/dailog';
import { ValidationService } from '../shared/dialog/validation.service';
import { FormBuilder, FormGroup, Validators,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
@Component({  moduleId: module.id,
  selector: 'ap-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  userForm: any;  
    constructor(private formBuilder: FormBuilder){
    //   this.userForm = this.formBuilder.group({
    //   'name': ['', Validators.required],
    //   'lastname': ['',Validators.required],
    //   'email': ['', [Validators.required, ValidationService.emailValidator]],
    //   'profile': ['', [Validators.required, Validators.minLength(10)]],
    //   'firstname':['',[Validators.required, Validators.minLength(10)]],
    //   'password':['',[Validators.required,Validators.minLength(6)]]
    // });
  }
}
