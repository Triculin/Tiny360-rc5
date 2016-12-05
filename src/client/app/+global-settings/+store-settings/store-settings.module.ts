import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreSettingsComponent } from './store-settings.component';
import {SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [StoreSettingsComponent],
    exports: [StoreSettingsComponent]
})

export class StoreSettingsModule { }
