import {  Component , OnInit  } from '@angular/core';
import {  HTTP_PROVIDERS  } from '@angular/http';
import {  HttpService } from '../services/http-service';
@Component({
  moduleId: module.id,
  selector: 'ap-workshop',
  providers: [HttpService,HTTP_PROVIDERS],
  templateUrl: 'workshop.component.html'
})
export class WorkshopComponent implements OnInit {
  itemsObservables:any;
  workshopData:any;
  constructor ( public httpService:HttpService) {
  }
  ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
    this.workshopData = res.workshop;
    });
  }
}
