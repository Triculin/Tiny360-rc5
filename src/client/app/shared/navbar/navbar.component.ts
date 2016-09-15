import { Component } from '@angular/core';
import {HttpService} from "../../services/http-service";
import {HTTP_PROVIDERS} from "@angular/http";

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
  menuItems:any;
  constructor(public httpService: HttpService)
  {
    this.httpService.getMasterConfig().subscribe(res =>{this.menuItems = res.menuList;});
  }
}
