import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemUsersComponent } from './system-users.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [SystemUsersComponent],
    exports: [SystemUsersComponent]
})

export class SystemUsersModule { }
