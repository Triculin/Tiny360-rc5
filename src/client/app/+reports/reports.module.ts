import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './reports.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [ReportsComponent],
    exports: [ReportsComponent],
    providers: [NameListService]
})

export class ReportsModule { }
