import { Component, ViewChild } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html'
})

export class ToolbarComponent {
  sidebar:string='block';
  private toggleSidebar(){
        (this.sidebar=='none')? this.sidebar='block':this.sidebar='none';        
  }
}
