import {  Component , OnInit ,ViewChild } from '@angular/core';
import {  HTTP_PROVIDERS  } from '@angular/http';
import {  HttpService } from '../services/http-service';
import { DynamicCmp} from '../shared/dialog/dialog';
import { ValidationService } from '../shared/dialog/validation.service';
import { ControlMessagesComponent } from '../shared/dialog/control-messages.component';
import { FormBuilder, FormGroup, Validators,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'ap-workshop',
  providers: [HttpService,HTTP_PROVIDERS],
   directives:[DynamicCmp],
  templateUrl: 'workshop.component.html'
})
export class WorkshopComponent implements OnInit {
  @ViewChild(DynamicCmp) modalWorkShopComponent: DynamicCmp;
  itemsObservables:any;
  workshopData:any;
  workshopformData:any;
  userForm :any;
  constructor ( public httpService:HttpService) {
  }
  ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
    this.workshopData = res.workshop;
    this.workshopformData=res.workshopForm;
    this.userForm = this.workshopformData;
    });
  }

   modalWorkShopOpen() {
    this.modalWorkShopComponent.modalPopupOpen();
    }
}



