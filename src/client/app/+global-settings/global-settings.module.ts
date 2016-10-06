import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsComponent } from './global-settings.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [GlobalSettingsComponent],
    exports: [GlobalSettingsComponent]
})
export class GlobalSettingsModule {
}
