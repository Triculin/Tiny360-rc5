import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

 import { DialogModule} from '../shared/dialog/dialog.module';
@NgModule({
    imports: [CommonModule,SharedModule,DialogModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule {}
