import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from "@angular/http";

import {SearchPipe} from "../pipes/header-pipe";
import {PaginationPipe} from "../pipes/pagination-pipe";
import {GlobalSearchPipe} from "../pipes/global-search-pipe";
import { AfterViewInit, ViewChild } from '@angular/core';
import {FiltersService} from "../services/filters-service";
import {ConfigService} from "../services/config-service";
import {ResourceService} from "../services/resource-service";
import {HttpService} from "../services/http-service";

import {GlobalSearch} from "../shared/global-search/global-search.component";


import {Pagination} from "../shared/pagination/pagination.component";

@Component({
  selector: 'ng2-table',
  providers: [HttpService, FiltersService, ResourceService, ConfigService, HTTP_PROVIDERS],
  directives: [ Pagination, GlobalSearch],
  pipes: [SearchPipe, PaginationPipe, GlobalSearchPipe],
  template: `
  <global-search 
        (globalUpdate)="globalSearchTerm = $event">
</global-search>

<div class="columns">
        <div class="column">
        <label class="control">itemsPerPage
            <select (change)="changeRange($event, $event.target.value)">
                <option [value]=10>10</option>
                <option [value]=15>15</option>
                <option [value]=20>20</option>
                <option [value]=25>25</option>
                <option [value]=100>100</option>
            </select>
        </label>
    </div>
<table class="table">
    <thead>
    <tr>
        <th [style.display]="config.orderEnabled?'':'none' "
            *ngFor="let key of keys"
            (click)="orderBy(key)">
            {{ key }}
            <span *ngIf="resource.order[key]==='asc' " class="ng2-table__sort-indicator ng2-table__sort-indicator--down"></span>
            <span *ngIf="resource.order[key]==='desc' " class="ng2-table__sort-indicator ng2-table__sort-indicator--up"></span>
        </th>
        
    </tr>
   
    </thead>
    <tbody>
    <tr *ngFor="let row of data| search : term  | global : globalSearchTerm | pagination : range">
        <td *ngFor="let key of keys">
            {{ row[key] }}
        </td>
        <td *ngIf="config.editEnabled">
            <button class="ng2-table__button">Edit</button>
        </td>
    </tr>
    </tbody>
    <tfoot *ngIf="config.footerEnabled">
    <tr>
        <td *ngFor="let key of keys"></td>
        <td></td>
    </tr>
    </tfoot>
</table>

<pagination *ngIf="config.paginationEnabled" 
            [numberOfItems]="numberOfItems" 
            (updateRange)="range = $event"></pagination>
  `,
  // styleUrls: ['app/styles/main.css'],
  encapsulation: ViewEncapsulation.None,

})

export class GlobalSettingsComponent implements OnInit {
  @Input() configuration:ConfigService;
   @ViewChild(Pagination)
  private table: Pagination;
  constructor(public filtersService:FiltersService,
              public config:ConfigService,
              public resource:ResourceService,
              public httpService:HttpService) {
  }

  ngOnInit() {
    if (this.configuration) {
      this.config = this.configuration;
    }
    this.numberOfItems = 0;
    this.itemsObservables = this.httpService.getData();
    this.itemsObservables.subscribe(res => {
    //   this.data = res;
    //   this.numberOfItems = res.length;
    //   this.keys = Object.keys(this.data[0]);
    //   this.resource.keys = this.keys;
     this.data = res.globalsettings.Data[0].values;
      this.numberOfItems = res.globalsettings.Data[0].values.length;
      this.keys = Object.keys(this.data[0]);
      // this.resource.keys = this.keys;
      // this.resource.keys = this.data;
      // //this.data = res;
      this.keys = Object.keys(this.data[0]);
    });
  }

  public data:Array<any>;
  public keys:Array<any>;
  public numberOfItems:number;
  public itemsObservables:any;

  public orderBy(key:string) {
    // if(this.resource.data.length==0){
    // this.resource.data=this.data;}
    this.data = this.resource.sortBy(key);
  };
  changeRange(e:any,value:any){
this.table.changeRange(e,value);
  }
}
