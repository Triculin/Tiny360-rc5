import { Component,OnInit,ViewChild  } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from '../services/http-service';
import { DialogComponent } from '../shared/dialog/dialog.component';
@Component({
  moduleId: module.id,
  selector: 'ap-shop',
  providers: [  HttpService,HTTP_PROVIDERS  ],
  directives: [ DialogComponent ],
  templateUrl: 'shop.component.html'
})
export class ShopComponent implements OnInit {
  itemsObservables:any;
  shopData:Array<any>;
  @ViewChild(DialogComponent) modalShopComponent: DialogComponent;
  constructor ( public httpService:HttpService) {
  }
   ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
    this.shopData = res.shop;
    });
  }
  modalShopOpen() {
    this.modalShopComponent.modalPopupOpen();
  }
}
