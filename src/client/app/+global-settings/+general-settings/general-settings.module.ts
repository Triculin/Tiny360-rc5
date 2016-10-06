import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {GeneralSettingsComponent } from './general-settings.component';
import {SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [GeneralSettingsComponent],
    exports: [GeneralSettingsComponent]
})
export class GeneralSettingsModule {
}
