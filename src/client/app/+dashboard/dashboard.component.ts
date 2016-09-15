import {Component, Input, Output, EventEmitter, OnInit,ViewEncapsulation} from '@angular/core';
import {HttpService} from "../services/http-service";
import {HTTP_PROVIDERS} from "@angular/http";

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ap-dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [HttpService , HTTP_PROVIDERS],
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  itemsObservables:any;
  data:any;
  
  constructor(
 
              public httpService:HttpService) {

  }
ngOnInit() {
   
    
    this.itemsObservables = this.httpService.getDropdowns();
    this.itemsObservables.subscribe(res => {
    this.data = res.test1;  
    
    });
    
   
  }
}
