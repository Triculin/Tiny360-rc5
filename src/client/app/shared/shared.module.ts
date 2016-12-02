import { NgModule, ModuleWithProviders,ComponentRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
//import { DialogComponent } from './dialog/index';
import { NameListService } from './name-list/index';
import {Validationservice1} from './dialog/formvalidate';
import {PaginationComponent, GlobalSearchComponent, HttpService, ResourceService, FiltersService, GlobalSearchPipe,
  SearchPipe, PaginationPipe}from'./index';
  import {ControlMessagesComponent } from './dialog/control-messages.component';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
   //providers:[FiltersService,ConfigService,ResourceService,HttpService],
 declarations: [ToolbarComponent, NavbarComponent, PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,
  SearchPipe, PaginationPipe,ControlMessagesComponent],
  exports: [ToolbarComponent, NavbarComponent, PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,
  SearchPipe, PaginationPipe,CommonModule, FormsModule, ReactiveFormsModule, RouterModule,ControlMessagesComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, HttpService, ResourceService, FiltersService,ComponentRef]
    };
  }
}
