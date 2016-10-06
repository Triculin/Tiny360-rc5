import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormInputTextModule } from '../shared/formelements/form-input-text/form-input-text.module';

@NgModule({
    imports: [CommonModule,FormInputTextModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule {}
