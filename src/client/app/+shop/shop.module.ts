import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [ShopComponent],
    exports: [ShopComponent]
})
export class ShopModule {
}
