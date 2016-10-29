import { Component,OnInit,ViewChild } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from '../shared/services/http-service';
import { DialogComponent } from '../shared/dialog/dialog.component';
@Component({
  moduleId: module.id,
  selector: 'ap-system-users',
  providers: [HttpService,HTTP_PROVIDERS],
  directives: [ DialogComponent ],
  templateUrl: 'system-users.component.html'
})
export class SystemUsersComponent implements OnInit {
  itemsObservables:any;
  systemUsersData:Array<any>;
  @ViewChild(DialogComponent) modalSystemUsersComponent: DialogComponent;
  constructor ( public httpService:HttpService) {
  }
  ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
      this.systemUsersData = res.systemUsers;
    });
  }
  modalSystemUsersOpen() {
    this.modalSystemUsersComponent.modalPopupOpen();
  }
}
