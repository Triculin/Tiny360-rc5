import { Component,OnInit,ViewChild } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from '../services/http-service';
import { DynamicCmp} from '../shared/dialog/dialog';
import { ValidationService } from '../shared/dialog/validation.service';
import { ControlMessagesComponent } from '../shared/dialog/control-messages.component';
import { FormBuilder, FormGroup, Validators,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'ap-shop',
  providers: [HttpService,HTTP_PROVIDERS],
   directives:[DynamicCmp],
  templateUrl: 'shop.component.html'
})
export class ShopComponent implements OnInit {
   @ViewChild(DynamicCmp) modalShopComponent: DynamicCmp;
  itemsObservables:any;
  shopData:any;
  shopformData:any;
  userForm:any;
  constructor ( public httpService:HttpService,private formBuilder: FormBuilder) {
  }
   ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
    this.shopData = res.shop;
     this.shopformData=res.shopForm;
    this.userForm = this.shopformData;
    });
  }
   modalShopOpen() {
    this.modalShopComponent.modalPopupOpen();
    }
 }
