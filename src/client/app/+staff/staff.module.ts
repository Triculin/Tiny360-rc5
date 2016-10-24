import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import {HttpService} from '../shared/services/http-service';
import { SharedModule  } from '../shared/shared.module';
import {DialogModule}  from '../shared/dialog/dialog.module';
@NgModule({
    imports: [CommonModule,SharedModule,DialogModule],
    declarations: [StaffComponent],
    providers:[HttpService],
    exports: [StaffComponent]
})
export class StaffModule {
}
