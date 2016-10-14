import { Component,OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from '../services/http-service';
import { DynamicCmp} from '../shared/dialog/dialog';
import { ValidationService } from '../shared/dialog/validation.service';
import { ControlMessagesComponent } from '../shared/dialog/control-messages.component';
@Component({
  moduleId: module.id,
  selector: 'ap-staff',
  providers: [HttpService,HTTP_PROVIDERS],
   directives:[DynamicCmp],
  templateUrl: 'staff.component.html'
})
export class StaffComponent implements OnInit {
  itemsObservables:any;
  staffData:any;
  constructor ( public httpService:HttpService) {
  }
   ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
    this.staffData = res.staff;
    
    });
  }
}
