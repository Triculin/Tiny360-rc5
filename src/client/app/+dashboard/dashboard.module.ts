import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule {}
