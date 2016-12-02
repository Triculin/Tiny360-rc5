import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'form-input',
  templateUrl: 'app/shared/forms/Formcomponent.html'
 
})
export class FormComponent {
  userForm: any;
  data:any;
    
     constructor(private formBuilder: FormBuilder){
          this.userForm = this.formBuilder.group(this.data);
  }
  }
 
