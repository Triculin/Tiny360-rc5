import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'form-input',
  templateUrl: 'app/shared/forms/Formcomponent.html'
 
})
export class FormComponent {
  userForm: any;
  data:any={
      'firstName': ['', Validators.required],
      'lastName': ['',Validators.required],
      'dateOfJoined': ['', Validators.required],
      'Designation': ['', [Validators.required, Validators.minLength(10)]],
      'contactNumber':['',[Validators.required, Validators.minLength(10)]]
  };
    
     constructor(private formBuilder: FormBuilder){
          this.userForm = this.formBuilder.group(this.data);
  }
  }
 
