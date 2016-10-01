import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSettingsComponent } from './general-settings.component';
import {FiltersService} from "../../shared/services/filters-service";
import {ResourceService} from "../../shared/services/resource-service";
import {HttpService} from "../../shared/services/http-service";
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [GeneralSettingsComponent],
    // providers:[FiltersService,ResourceService,HttpService],
    exports: [GeneralSettingsComponent]
})

export class GeneralSettingsModule { }
/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSettingsComponent } from './general-settings.component';
import {FiltersService} from "../../shared/services/filters-service";
import {ResourceService} from "../../shared/services/resource-service";
import {HttpService} from "../../shared/services/http-service";
import {SharedModule} from "../../shared/shared.module";
@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [GeneralSettingsComponent],
    providers:[FiltersService,ResourceService,HttpService],
    exports: [GeneralSettingsComponent]
})

export class GeneralSettingsModule { }
*/