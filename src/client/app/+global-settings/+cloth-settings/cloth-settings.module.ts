import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothSettingsComponent } from './cloth-settings.component';

import {SharedModule } from '../../shared/shared.module';


@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [ClothSettingsComponent],
    exports: [ClothSettingsComponent]
})

export class ClothSettingsModule { }
