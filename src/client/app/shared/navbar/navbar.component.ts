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
  // cnt:boolean = false;
  cnt:number = 0;
  count:number = 0;
  // submenus:any;
  constructor(public httpService: HttpService)
  {
    this.httpService.getMasterConfig().subscribe(res =>{this.menuItems = res.menuList;});   
  }
// getSubitems(i:menuList){
//  this.submenus=this.menuItems[i].subMenuList;
// }
// toggleSubitems(abc:string){
    toggleSubitems(i:number){
      this.cnt=i;
      this.count++;
// alert(abc);
// alert(this.menuItems.name+'name');
// this.cnt = !this.cnt;
}
hello1(){
    alert('hello from child' );
  }
}
