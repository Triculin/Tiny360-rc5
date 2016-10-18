import {Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/map';
import { ViewChild } from '@angular/core';
import {PaginationComponent, HttpService, FiltersService, ResourceService, GlobalSearchPipe, PaginationPipe, SearchPipe}
from '../../shared/index';
@Component({
  moduleId: module.id,
  selector: 'ap-general-settings',
  pipes: [SearchPipe, PaginationPipe, GlobalSearchPipe],
  templateUrl: 'general-settings.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GeneralSettingsComponent implements OnInit {
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
  sortedCols: Array<number>;
  showNumberOfItemsList:Array<any>;
  constructor(public filtersService: FiltersService,
    public resource: ResourceService,
    public httpService: HttpService) {
  }
  ngOnInit() {
    this.numberOfItems = 0;
    this.resource.order=[];
    this.itemsObservables = this.httpService.getData();
    this.itemsObservables.subscribe((res: any) => {
      this.tabs = res.globalsettings.globalsettingsData;
      this.data = res.globalsettings.globalsettingsData[0].values;
      this.showNumberOfItemsList=res.globalsettings.globalsettingsData[0].showRowsList;
      this.sortedCols = res.globalsettings.globalsettingsData[0].sorted;
      this.numberOfItems = res.globalsettings.globalsettingsData[0].values.length;
      this.keys = Object.keys(this.data[0]);
    });
  }
  public orderBy(key: string, i: number) {
    if (this.sortedCols.indexOf(i) > -1)
      this.data = this.resource.sortBy(key);
  };
  changeRange(value: any) {
    this.paginationTable.changeRange(value);
  }
  imageShow(d: any) {
    if (typeof d === 'string') {
      return (d.indexOf('.jpg') > -1);
    } else {
      return false;
    }
  }
  stringShow(d: any, key: any) {
    if (typeof d === 'string') {
      var str = d.toString();
      var i = (str.indexOf('.jpg') < 0);
      return i;
    } else {
      return true;
    }
  }
  goTab(i: number, tab: any) {
    this.showNumberOfItems = 10;
    this.search = '';
    this.resource.order=[];
    this.keys = Object.keys(tab.values[0]);
    this.paginationTable.changeRange(10);
    this.data = tab.values;
    this.showNumberOfItemsList=tab.showRowsList;
    this.sortedCols = tab.sorted;
    this.tabIndex = i;
  }
}

