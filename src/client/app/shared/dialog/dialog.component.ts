import { Component  } from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import {HttpService} from "../../services/http-service";
@Component({
  selector: 'pop-up',
  providers: [HttpService,HTTP_PROVIDERS],
  templateUrl:'app/shared/dialog/dialog.component.html',
  styleUrls:['app/shared/dialog/dialog.component.css'] 
})
export class DialogComponent { 

  modalstatus:string = "none";
   hideElement:boolean = false;
   hideElement1:boolean = true;
   data : any;
   itemsObservables:any;
   constructor( public httpService:HttpService) {
  }
   ngOnInit() {
    this.itemsObservables = this.httpService.getMasterConfig();
    this.itemsObservables.subscribe((res:any) => {
     this.data = res.shop;
    });
  }
  onClickedExit() {
    this.modalstatus = "block";
  }

  close(){
    this.modalstatus = "none";
    this.hideElement = false;
    this.hideElement1 = true;
  }
  hideDiv(){
        this.hideElement = true;
        this.hideElement1 = false;
    }

    hideDiv1(){
         this.hideElement = false;
        this.hideElement1 = true;
    }
  
}