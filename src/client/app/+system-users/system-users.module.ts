import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemUsersComponent } from './system-users.component';
import {HttpService} from '../services/http-service';
import { SharedModule  } from '../shared/shared.module';
import {DialogModule}  from '../shared/dialog/dialog.module';
@NgModule({
    imports: [CommonModule,SharedModule,DialogModule],
    declarations: [SystemUsersComponent],
     providers:[HttpService],
    exports: [SystemUsersComponent]
})

export class SystemUsersModule { }

