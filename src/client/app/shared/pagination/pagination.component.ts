import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ResourceService} from "../../services/resource-service";
import {ConfigService} from "../../services/config-service";
@Component({
  selector: 'pagination',
  template: `
<div class="ng2-table__pagination-wrapper">
    <ul class="ng2-table__pagination">
        <li [class.disabled]="isFirstPage()">
            <a href="#" (click)="previousPage($event)">«</a>
        </li>
        <li *ngFor="let page of pageNumbers" [class.active]="isActivePage(page)">
            <a href="#" (click)="changePage($event, page)">{{page}}</a>
        </li>
        <li [class.disabled]="isLastPage()">
            <a href="#" (click)="nextPage($event)">»</a>
        </li>
    </ul>

  <ul class="ng2-table__items-per-page">
      <li [class.active]="isActiveRange(5)"><a href="#" (click)="changeRange($event, 5)">5</a></li>
      <li [class.active]="isActiveRange(10)"><a href="#" (click)="changeRange($event, 10)">10</a></li>
      <li [class.active]="isActiveRange(25)"><a href="#" (click)="changeRange($event, 25)">25</a></li>
      <li [class.active]="isActiveRange(50)"><a href="#" (click)="changeRange($event, 50)">50</a></li>
      <li [class.active]="isActiveRange(100)"><a href="#" (click)="changeRange($event, 100)">100</a></li>
  </ul>
</div>
`
})

export class Pagination {

  private pageNumber:number;
  private range:number;
  public pageNumbers:Array<any>;

  constructor(public resource:ResourceService,
              public config:ConfigService) {
    this.pageNumber = 1;
    this.range = this.config.rows || 10;
    this.pageNumbers = [];
    ResourceService.getPipedData().subscribe(data => {
      this.numberOfItems = data;
      this.updateNumberPerPage();
    });
  }

  public emitPaginationProperties():void {
    this.updateRange.emit({range: this.range, page: this.pageNumber});
  }

  public updateNumberPerPage():void {
    // issue #5
    // if (this.range > this.numberOfItems && this.numberOfItems > 0) {
    //   this.range = this.numberOfItems;
    // }
    let numberPerPage = Math.ceil(this.numberOfItems / this.range);
    this.pageNumbers = Array(numberPerPage).fill(numberPerPage, 0).map((_, i) => i + 1);
  }

  public updatePagination():void {
    this.updateNumberPerPage();
    this.emitPaginationProperties();
  }

  public isActiveRange(currentRange:Number):boolean {
    return currentRange === this.range;
  }

  public isActivePage(currentPage:Number):boolean {
    return currentPage === this.pageNumber;
  }

  public nextPage(event:any):void {
    event.preventDefault();
    if (!this.isLastPage()) {
      this.pageNumber++;
    }
  }

  public previousPage(event:any):void {
    event.preventDefault();
    if (!this.isFirstPage()) {
      this.pageNumber--;
    }
  }

  public isLastPage():boolean {
    return this.pageNumber === this.pageNumbers.length;
  }

  public isFirstPage():boolean {
    return this.pageNumber === 1;
  }

  @Input() numberOfItems:number;
  @Output() updateRange = new EventEmitter();

  ngOnChanges() {
    this.updatePagination();
  }

  changeRange(event:any, number:number):void {
    event.preventDefault();
    this.range = number;
    this.pageNumber = 1;
    this.updatePagination();
  }

  changePage(event:any, numberOfPage:number):void {
    event.preventDefault();
    this.pageNumber = numberOfPage;
    this.updatePagination();
  }
}
