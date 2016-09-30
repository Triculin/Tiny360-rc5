import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { DialogComponent } from '../shared/dialog/dialog.component';
import {HttpService} from "../services/http-service";

@NgModule({
    imports: [CommonModule],
    declarations: [StaffComponent],
    providers:[HttpService],
    exports: [StaffComponent]
})

export class StaffModule { }