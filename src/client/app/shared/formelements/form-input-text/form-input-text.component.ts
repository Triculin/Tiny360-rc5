import { Component, Input } from '@angular/core';
import { FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
    selector: 'form-input-text',
    templateUrl: 'app/shared/formelements/form-input-text/form-input-text.component.html'
})
export class FormInputTextComponent {
    userForm:any;
    @Input() inputId: string;
    @Input() inputType: string;
    @Input() inputControl: FormControl;
    Data:any={
      'firstName': ['', Validators.required],
      'lastName': ['',Validators.required],
      'dateOfJoined': ['', Validators.required],
      'Designation': ['', [Validators.required, Validators.minLength(10)]],
      'contactNumber':['',[Validators.required, Validators.minLength(10)]]
    };
    constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group(this.Data);
    }
}
