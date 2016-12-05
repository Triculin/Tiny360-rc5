import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostCenterComponent } from './cost-center.component';
import {SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [CostCenterComponent],
    exports: [CostCenterComponent]
})

export class CostCenterModule { }
