import { FormBuilder, FormGroup, Validators, FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ValidationService } from './validation.service';

export class Validationservice1 {
   
constructor() {
   
    }
    // formvalidator: any = {};
    formvalidations: any =
  {
        "text": [Validators.required, ValidationService.textValidator] ,
         "number": [Validators.required] ,
         "textNumber": [Validators.required],
         "email": [Validators.required] ,
         "password":[Validators.required],
         "date":[Validators.required]
         
        
  }
    formData(){
        return this.formvalidations;
    }
}



