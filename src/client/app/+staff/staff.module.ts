import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import {HttpService} from '../services/http-service';
import { SharedModule  } from '../shared/shared.module';
@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [StaffComponent],
    providers:[HttpService],
    exports: [StaffComponent]
})
export class StaffModule { }
