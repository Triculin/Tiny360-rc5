import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from '@angular/http';
import {SearchPipe} from '../../shared/pipes/headerpipe/header-pipe';
import {PaginationPipe} from '../../shared/pipes/paginationpipe/pagination-pipe';
import {GlobalSearchPipe} from '../../shared/pipes/globalsearchpipe/global-search-pipe';
import { AfterViewInit, ViewChild } from '@angular/core';
import {PaginationComponent, GlobalSearchComponent, HttpService, FiltersService, ResourceService, ConfigService} from '../../shared/index';
@Component({
  moduleId: module.id,
  selector: 'ap-general-settings',
  templateUrl: 'general-settings.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GeneralSettingsComponent {
  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables: any;
  @ViewChild(PaginationComponent)
  paginationTable: PaginationComponent;
  private search: any = '';
  private tabs: any;
  private tabIndex: number = 0;
  private showNumberOfItems: number = 10;
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
      this.numberOfItems = res.globalsettings.Data[0].values.length;
      this.keys = Object.keys(this.data[0]);
    });
  }
  public orderBy(key: string) {
    if (key.toLowerCase().indexOf('image') < 0)
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
    this.keys = Object.keys(tab.values[0]);
    this.paginationTable.changeRange(10);
    this.data = tab.values;
    this.tabIndex = i;
  }
}

