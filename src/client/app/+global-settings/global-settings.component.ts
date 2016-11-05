import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/map';
import {ViewChild } from '@angular/core';
import {PaginationComponent, HttpService, FiltersService, ResourceService, GlobalSearchPipe, PaginationPipe, SearchPipe}
from '../shared/index';
import { DialogComponent } from '../shared/dialog/dialog.component';
@Component({
  selector: 'global-settings',
  directives: [ DialogComponent ],
  pipes: [SearchPipe, PaginationPipe, GlobalSearchPipe],
  templateUrl: 'app/+global-settings/global-settings.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class GlobalSettingsComponent implements OnInit {
  @ViewChild(DialogComponent) modalGlobalsettingsComponent: DialogComponent;
  @ViewChild(PaginationComponent)
  paginationTable: PaginationComponent;
  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables: any;
  search: any = '';
  tabs: any;
  tabIndex: number = 0;
  showNumberOfItemsList:Array<any>;
  showNumberOfItems: number = 10;
  sortedCols: Array<number>;
  globalsettingsData:Array<any>;
  modalPopup:any;
  modalPopupName:any;
  constructor(public filtersService: FiltersService,
    public resource: ResourceService,
    public httpService: HttpService) {
  }
  ngOnInit() {
      this.httpService.getMasterConfig().subscribe((res:any) => {
        this.globalsettingsData = res.globalSettings;
        this.modalPopup = this.globalsettingsData[0].fields;
        this.modalPopupName = this.globalsettingsData[0].fields[0].content; 
      });
      this.numberOfItems = 0;
      this.resource.order=[];
      this.httpService.getData().subscribe((res: any) => {
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
  goTab(i: number, tab: any,e:any) {
    this.showNumberOfItems = 10;
    this.search = '';
    this.resource.order=[];
    this.keys = Object.keys(tab.values[0]);
    this.paginationTable.changeRange(10);
    this.data = tab.values;
    this.showNumberOfItemsList=tab.showRowsList;
    this.sortedCols = tab.sorted;
    this.tabIndex = i;
    this.modalPopup = this.globalsettingsData[i].fields;
     this.modalPopupName = this.globalsettingsData[i].fields[0].content; 
  }
  modalGlobalsettingsOpen() {
    this.modalGlobalsettingsComponent.modalPopupOpen();
  }
}
