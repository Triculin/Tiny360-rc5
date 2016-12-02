import { Component,OnInit,ViewChild } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from '../shared/services/http-service';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { ValidationService } from '../shared/dialog/validation.service';
import { ControlMessagesComponent } from '../shared/dialog/control-messages.component';
import { FormBuilder, FormGroup, Validators,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
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
  userForm:any;
systemUsersformData:any;
systemUsersForm:any;
  @ViewChild(DialogComponent) modalSystemUsersComponent: DialogComponent;
  constructor ( public httpService:HttpService,private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
      this.systemUsersData = res.systemUsers;
      this.systemUsersformData=res.systemUsersForm;
    this.userForm = this.systemUsersformData;
    });
  }
  modalSystemUsersOpen() {
    this.modalSystemUsersComponent.modalPopupOpen();
  }
}
