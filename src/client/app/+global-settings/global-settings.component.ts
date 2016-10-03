import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from '@angular/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import {SearchPipe} from '../shared/pipes/headerpipe/header-pipe';
import {PaginationPipe} from '../shared/pipes/paginationpipe/pagination-pipe';
import {GlobalSearchPipe} from '../shared/pipes/globalsearchpipe/global-search-pipe';
import {PaginationComponent, GlobalSearchComponent, HttpService, FiltersService, ResourceService, ConfigService} from '../shared/index';
@Component({
  selector: 'global-settings',
  templateUrl: 'app/+global-settings/global-settings.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class GlobalSettingsComponent {
  @ViewChild(PaginationComponent)
  paginationTable: PaginationComponent;
  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables: any;
  search: any = '';
  tabs: any;
  tabIndex: number = 0;
  showNumberOfItems: number = 10;
  sortedCols:Array<number>;
  constructor(public filtersService: FiltersService,
    public resource: ResourceService,
    public httpService: HttpService) {
  }
  ngOnInit() {
    this.numberOfItems = 0;
    this.itemsObservables = this.httpService.getData();
    this.itemsObservables.subscribe((res: any) => {
      this.tabs = res.globalsettings.Data;
      this.data = res.globalsettings.Data[0].values;
      this.sortedCols=res.globalsettings.Data[0].sorted;
      this.numberOfItems = res.globalsettings.Data[0].values.length;
      this.keys = Object.keys(this.data[0]);
    });
  }

  public orderBy(key:string,i:number) {
   
    if(this.sortedCols.indexOf(i)>-1)
    this.data = this.resource.sortBy(key);
  };
  changeRange(value: any) {
    this.paginationTable.changeRange(value);
  }
  imageShow(d: any) {
    if (typeof d === 'string') {
      return (d.indexOf('.jpg') > -1)
    }
    else {
      return false;
    }

  }
  stringShow(d: any, key: any) {
    if (typeof d === 'string') {
      var str = d.toString();
      var i = (str.indexOf('.jpg') < 0);
      return i;
    }
    else {
      return true;
    }
  }
  goTab(i: number, tab: any) {
    this.showNumberOfItems = 10;
    this.search = '';
    this.resource.sortBy('');
    this.keys = Object.keys(tab.values[0]);
    this.paginationTable.changeRange(10);
    this.data = tab.values;
    this.sortedCols=tab.sorted;
    this.tabIndex = i;
  }
}
