import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [StaffComponent],
    exports: [StaffComponent]
})
export class StaffModule {
}
