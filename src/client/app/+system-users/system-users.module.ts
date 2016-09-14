import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemUsersComponent } from './system-users.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SystemUsersComponent],
    exports: [SystemUsersComponent]
})

export class SystemUsersModule { }
