import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSettingsComponent } from './general-settings.component';

@NgModule({
    imports: [CommonModule],
    declarations: [GeneralSettingsComponent],
    exports: [GeneralSettingsComponent]
})

export class GeneralSettingsModule { }
