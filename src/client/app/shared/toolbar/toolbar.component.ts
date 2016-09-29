import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  directives: [NavbarComponent]
})

export class ToolbarComponent {
  @ViewChild(NavbarComponent)
  private abcd:NavbarComponent;
  private hello(){
  //this.abcd.hello1();
  }
}
