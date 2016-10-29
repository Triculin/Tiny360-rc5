import {Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import {SearchPipe} from '../shared/pipes/headerpipe/header-pipe';
import {PaginationPipe} from '../shared/pipes/paginationpipe/pagination-pipe';
import {GlobalSearchPipe} from '../shared/pipes/globalsearchpipe/global-search-pipe';
import {PaginationComponent, HttpService, FiltersService, ResourceService } from '../shared/index';
import { DialogComponent } from '../shared/dialog/dialog.component';
@Component({
  moduleId: module.id,
  selector: 'ap-shop',
  directives: [ DialogComponent ],
  pipes: [SearchPipe, PaginationPipe, GlobalSearchPipe],
  templateUrl: 'shop.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent implements OnInit {

  @ViewChild(DialogComponent) modalShopComponent: DialogComponent;
  @ViewChild(PaginationComponent)
  paginationTable: PaginationComponent;
  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables: any;
  search: any = '';
  showNumberOfItems: number = 10;
  sortedCols: Array<number>;
  showNumberOfItemsList:Array<any>;
  shopData:Array<any>;
  constructor(public filtersService: FiltersService, public resource: ResourceService, public httpService: HttpService) {
  }
  ngOnInit() {
    this.httpService.getMasterConfig().subscribe((res:any) => {
    this.shopData = res.shop;
    });
    this.numberOfItems = 0;
    this.httpService.getData().subscribe((res: any) => {
      this.data = res.shop.shopList;
      this.showNumberOfItemsList= res.shop.showRowsList;
      this.sortedCols = res.shop.sortedCols;
      this.numberOfItems = res.shop.shopList.length;
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
    }else {
      return false;
    }
  }
  stringShow(d: any, key: any) {
    if (typeof d === 'string') {
      var str = d.toString();
      var i = ((str.indexOf('.jpg') < 0) && key !== 'actions');
      return i;
    }else {
      return true;
    }
  }
    modalShopOpen() {
    this.modalShopComponent.modalPopupOpen();
    }
}
