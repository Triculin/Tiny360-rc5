import {  Component , OnInit , ViewChild  } from '@angular/core';
import {  HTTP_PROVIDERS  } from '@angular/http';
import {  HttpService } from '../shared/services/http-service';
import { DialogComponent } from '../shared/dialog/dialog.component';
@Component({
  moduleId: module.id,
  selector: 'ap-workshop',
  providers: [HttpService,HTTP_PROVIDERS],
  directives: [ DialogComponent ],
  templateUrl: 'workshop.component.html'
})
export class WorkshopComponent implements OnInit {
  itemsObservables:any;
  workshopData:Array<any>;
  @ViewChild(DialogComponent) modalWorkshopComponent: DialogComponent;
  constructor ( public httpService:HttpService) {
  }
  ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
    this.workshopData = res.workshop;
    });
  }
  modalWorkshopOpen() {
    this.modalWorkshopComponent.modalPopupOpen();
  }
}
