import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { SharedModule  } from '../shared/shared.module';
import {DialogModule}  from '../shared/dialog/dialog.module';
@NgModule({
    imports: [CommonModule,SharedModule,DialogModule],
    declarations: [ShopComponent],
    exports: [ShopComponent]
})
export class ShopModule { }
