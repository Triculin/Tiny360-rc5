import {Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import {SearchPipe} from '../shared/pipes/headerpipe/header-pipe';
import {PaginationPipe} from '../shared/pipes/paginationpipe/pagination-pipe';
import {GlobalSearchPipe} from '../shared/pipes/globalsearchpipe/global-search-pipe';
import {PaginationComponent, HttpService, FiltersService, ResourceService} from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'ap-staff',
  pipes: [SearchPipe, PaginationPipe, GlobalSearchPipe],
  templateUrl: 'staff.component.html',
  encapsulation: ViewEncapsulation.None
})
export class StaffComponent implements OnInit {
  @ViewChild(PaginationComponent)
  paginationTable: PaginationComponent;
  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables: any;
  search: any = '';
  showNumberOfItems: number = 10;
  sortedCols: Array<number>;
  constructor(public filtersService: FiltersService,
    public resource: ResourceService,
    public httpService: HttpService) {
    }
  ngOnInit() {
    this.numberOfItems = 0;
    this.itemsObservables = this.httpService.getData();
    this.itemsObservables.subscribe((res: any) => {
      this.data = res.staff.staffList;
      this.sortedCols = res.staff.sortedCols;
      this.numberOfItems = res.staff.staffList.length;
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
      var i = ((str.indexOf('.jpg') < 0) && key !== 'actions');
      return i;
    } else {
      return true;
    }
  }
}
