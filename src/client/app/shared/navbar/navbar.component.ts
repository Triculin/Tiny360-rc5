import { Component } from '@angular/core';
import {HttpService} from "../../services/http-service";
import {HTTP_PROVIDERS} from "@angular/http";
import {menuList} from "./menuList";


/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  providers: [HttpService, HTTP_PROVIDERS]
})

export class NavbarComponent {

  
  menuItems:menuList;
  
  constructor(public httpService: HttpService)
  {
    this.httpService.getMasterConfig().subscribe(res =>{this.menuItems = res.menuList;});

  }
  cnt:number = 0;
  count:number = 0;
 
    toggleSubitems(i:number){
      this.cnt=i;
      this.count++;

    }



}
