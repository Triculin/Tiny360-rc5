import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsComponent } from './global-settings.component';
import { SharedModule } from '../shared/shared.module';
import {  DialogModule }  from '../shared/dialog/dialog.module';
import { HttpService, FiltersService, ResourceService } from '../shared/index';
@NgModule({
    imports: [CommonModule, SharedModule,DialogModule],
    declarations: [GlobalSettingsComponent],
    providers:[FiltersService,ResourceService,HttpService],
    exports: [GlobalSettingsComponent]
})
export class GlobalSettingsModule {
}
