import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';
import{PaginationComponent,GlobalSearchComponent,HttpService,ResourceService,FiltersService,GlobalSearchPipe,SearchPipe,PaginationPipe}from'./index'
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
   //providers:[FiltersService,ConfigService,ResourceService,HttpService],
declarations: [ToolbarComponent, NavbarComponent,PaginationComponent,GlobalSearchComponent,GlobalSearchPipe,SearchPipe,PaginationPipe],
  exports: [ToolbarComponent, NavbarComponent,PaginationComponent,GlobalSearchComponent,GlobalSearchPipe,SearchPipe,PaginationPipe,
    CommonModule, FormsModule, RouterModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService,HttpService,ResourceService,FiltersService],
      
    };
  }
}
/*import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';
import{PaginationComponent,GlobalSearchComponent,HttpService,ResourceService,FiltersService}from'./index'
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 

@NgModule({
  imports: [CommonModule, RouterModule],
   //providers:[FiltersService,ConfigService,ResourceService,HttpService],
  declarations: [ToolbarComponent, NavbarComponent,PaginationComponent,GlobalSearchComponent],
  exports: [ToolbarComponent, NavbarComponent,PaginationComponent,GlobalSearchComponent,
    CommonModule, FormsModule, RouterModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService,HttpService,ResourceService,FiltersService]
    };
  }
}
*/