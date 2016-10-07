import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import {HttpService} from "../services/http-service";
import{SharedModule} from '../shared/shared.module';
//import {FormComponent } from '../shared/forms/form.component';
import{DialogModule} from '../shared/dialog/dialog.module';

@NgModule({
    imports: [CommonModule,SharedModule,DialogModule],
    declarations: [StaffComponent],
    
    exports: [StaffComponent]
})

export class StaffModule { }