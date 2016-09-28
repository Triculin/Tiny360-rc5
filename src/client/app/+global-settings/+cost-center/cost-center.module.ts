import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostCenterComponent } from './cost-center.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CostCenterComponent],
    exports: [CostCenterComponent]
})

export class CostCenterModule { }
