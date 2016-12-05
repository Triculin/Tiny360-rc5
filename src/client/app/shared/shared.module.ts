import { NgModule, ModuleWithProviders,ComponentRef } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';
import {PaginationComponent, GlobalSearchComponent, HttpService, ResourceService, FiltersService, GlobalSearchPipe,
  SearchPipe, PaginationPipe}from'./index';
import {ColorPickerService} from './colorpiker/color-picker.service';
import {ColorPickerDirective} from './colorpiker/color-picker.directive';
 
import {ControlMessagesComponent } from './dialog/control-messages.component'
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ToolbarComponent, NavbarComponent, PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,
  SearchPipe, PaginationPipe,ControlMessagesComponent,ColorPickerDirective],
  exports: [ToolbarComponent, NavbarComponent, PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,
  SearchPipe, PaginationPipe,CommonModule, FormsModule, ReactiveFormsModule, RouterModule,ControlMessagesComponent,ColorPickerDirective]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, HttpService, ResourceService, FiltersService,ComponentRef,ColorPickerService]
    };
  }
}
