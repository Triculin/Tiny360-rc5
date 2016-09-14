import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsComponent } from './global-settings.component';

@NgModule({
    imports: [CommonModule],
    declarations: [GlobalSettingsComponent],
    exports: [GlobalSettingsComponent]
})

export class GlobalSettingsModule { }
