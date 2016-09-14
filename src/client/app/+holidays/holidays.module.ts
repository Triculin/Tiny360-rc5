import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HolidaysComponent } from './holidays.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [HolidaysComponent],
    exports: [HolidaysComponent],
    providers: [NameListService]
})

export class HolidaysModule { }
