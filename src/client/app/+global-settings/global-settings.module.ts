import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsComponent } from './global-settings.component';
import { SharedModule } from '../shared/shared.module';
import { HttpService, FiltersService, ResourceService } from '../shared/index';
@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [GlobalSettingsComponent],
    providers:[FiltersService,ResourceService,HttpService],
    exports: [GlobalSettingsComponent]
})
export class GlobalSettingsModule {
}
