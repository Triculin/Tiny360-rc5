import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop.component';
import { SharedModule  } from '../shared/shared.module';
import { DialogModule    } from '../shared/dialog/dialog.module';
@NgModule({
    imports: [CommonModule,SharedModule,DialogModule],
    declarations: [WorkshopComponent],
    exports: [WorkshopComponent]
})
export class WorkshopModule { }
