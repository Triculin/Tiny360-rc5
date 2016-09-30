import {Component} from '@angular/core';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ap-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent { 
  test:string="none";
  testing(){
    this.test="block";
  }
}
