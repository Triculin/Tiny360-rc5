import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsComponent } from './global-settings.component';
import {FiltersService} from "../services/filters-service";
import {ConfigService} from "../services/config-service";
import {ResourceService} from "../services/resource-service";
import {HttpService} from "../services/http-service";
@NgModule({
    imports: [CommonModule],
    declarations: [GlobalSettingsComponent],
    providers:[FiltersService,ConfigService,ResourceService,HttpService],
    exports: [GlobalSettingsComponent]
})

export class GlobalSettingsModule { }
