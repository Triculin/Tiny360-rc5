import { Component,ViewChild,OnChanges,Input,trigger,state,style,transition,animate } from '@angular/core';

import {NavbarComponent} from '../navbar/navbar.component';
/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  animations: [
  trigger('visibilityChanged', [
    state('block', style({ 'width':'210px','opacity':'1'})),
    state('none', style({'width':'0px','opacity':'0'})),
    // transition('* => *', animate('.5s'))
    transition('none => block',animate('700ms')),
    transition('block => none', animate('500ms'))
  ]),
  trigger('routerVisibilityChanged', [
    state('block', style({ 'margin': '40px 0 0 220px'})),
    state('none', style({ 'margin': '40px 0 0 20px'})),
    // transition('* => *', animate('.5s'))
    transition('none => block',animate('700ms')),
    transition('block => none', animate('700ms'))
  ])
  ]
})

export class ToolbarComponent implements OnChanges {
@ViewChild(NavbarComponent) navbarComponent:NavbarComponent;

  sidebar:string='block';
  private toggleSidebar(){
        (this.sidebar=='none')? this.sidebar='block':this.sidebar='none';
        this.navbarComponent.tog();     
  }
  // @Input() isVisible : boolean = true;
  // visibility = 'block';
   ngOnChanges() {
    (this.sidebar=='none')? this.sidebar='block':this.sidebar='none';
   }
}
