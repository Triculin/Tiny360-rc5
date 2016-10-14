import { Component,OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from '../services/http-service';

@Component({
  moduleId: module.id,
  selector: 'ap-shop',
  providers: [HttpService,HTTP_PROVIDERS],
  templateUrl: 'shop.component.html'
})
export class ShopComponent implements OnInit {
  itemsObservables:any;
  shopData:any;
  constructor ( public httpService:HttpService) {
  }
   ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
    this.shopData = res.shop;
    });
  }
 }
