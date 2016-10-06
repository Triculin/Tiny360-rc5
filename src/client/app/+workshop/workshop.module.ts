import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WorkshopComponent],
    exports: [WorkshopComponent]
})

export class WorkshopModule {
}
