import { Component,OnInit,ViewChild } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from '../services/http-service';
import { DialogComponent } from '../shared/dialog/dialog.component';
@Component({
  moduleId: module.id,
  selector: 'ap-staff',
  providers: [HttpService,HTTP_PROVIDERS],
  directives: [ DialogComponent ],
  templateUrl: 'staff.component.html'
})
export class StaffComponent implements OnInit {
  itemsObservables:any;
  staffData:Array<any>;
  @ViewChild(DialogComponent) modalStaffComponent: DialogComponent;
  constructor ( public httpService:HttpService) {
  }
  ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
      this.staffData = res.staff;
    });
  }
  modalStaffOpen() {
    this.modalStaffComponent.modalPopupOpen();
  }
}
