import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop.component';
import { SharedModule  } from '../shared/shared.module';
@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [WorkshopComponent],
    exports: [WorkshopComponent]
})
export class WorkshopModule { }
