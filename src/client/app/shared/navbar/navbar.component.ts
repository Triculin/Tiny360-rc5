import { Component } from '@angular/core';
import {HttpService} from "../../services/http-service";
import {HTTP_PROVIDERS} from "@angular/http";
<<<<<<< HEAD
=======
import {menuList} from "./menuList";
>>>>>>> 0ace24d7b7689eea2ad53bbe5f31ff78ca323077

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
<<<<<<< HEAD
  menuItems:any;
  constructor(public httpService: HttpService)
  {
    this.httpService.getMasterConfig().subscribe(res =>{this.menuItems = res.menuList;});
=======
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
>>>>>>> 0ace24d7b7689eea2ad53bbe5f31ff78ca323077
  }
}
