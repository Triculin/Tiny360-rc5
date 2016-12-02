import { Component } from '@angular/core';
import {HttpService} from "../services/http-service";
import {HTTP_PROVIDERS} from "@angular/http";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {menuList} from "./menuList";
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  providers: [HttpService, HTTP_PROVIDERS],
  directives:[ROUTER_DIRECTIVES]
})

export class NavbarComponent {
  menuItems:menuList;

  public selected:number=999;
	public selectedSubMenu=999;

  constructor(public httpService: HttpService,private router: Router) {    this.httpService.getMasterConfig().subscribe(res =>{this.menuItems = res.menuList;});
  
  }

  cnt:number = 0;
  count:number = 0;
 
    toggleSubitems(i:number){
      this.cnt=i;
      this.count++;
    }


expandMenu(index:number) {
	  (this.selected===index)?this.selected=999:this.selected=index;
	  this.selectedSubMenu=999;
	}
go(routerLink:string) {
		 this.router.navigate([routerLink]);
	}

}
