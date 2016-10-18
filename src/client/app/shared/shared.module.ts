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

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ToolbarComponent, NavbarComponent, PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,
  SearchPipe, PaginationPipe],
  exports: [ToolbarComponent, NavbarComponent, PaginationComponent, GlobalSearchComponent, GlobalSearchPipe,
  SearchPipe, PaginationPipe,CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, HttpService, ResourceService, FiltersService,ComponentRef]
    };
  }
}
