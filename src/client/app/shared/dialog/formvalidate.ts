import { FormBuilder, FormGroup, Validators, FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ValidationService } from './validation.service';

export class Validationservice1 {
   
constructor() {
   
    }
    // formvalidator: any = {};
    formvalidations: any =
  {
        "text": [Validators.required, ValidationService.textValidator],
        "textoptional": [ ValidationService.text],
         "number": [Validators.required, ValidationService.numberValidator] ,
         "numberoptional": [ ValidationService.number] ,
         "textNumber": [Validators.required, ValidationService.textNumberValidator],
         "email": [Validators.required, ValidationService.emailValidator] ,
         "password":[Validators.required],
         "date":[Validators.required, ValidationService.dateValidator],
         "dropdown":[Validators.required]
         
        
  }
    formData(){
        return this.formvalidations;
    }
}



