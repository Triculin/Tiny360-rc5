import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ResourceService} from '../services/resource-service';
@Component({
  selector: 'pagination',
  templateUrl: 'app/shared/pagination/pagination.component.html'
})
export class PaginationComponent {
  public totalItems: number;
  public pageNumbers: Array<any>;
  private pageNumber: number;
  private range: number;
  private pageList: Array<number> = [];
  private onChange: Function;
  private onTouched: Function;
  private seletedPage: number = 1;
  private nextItemValid: boolean;
  private previousItemValid: boolean;
  currentpage: number = 1;
  @Input() numberOfItems: number;
  @Output() updateRange = new EventEmitter();
  @Input('paginationRange') pageSize: number;
  constructor(public resource: ResourceService) {
    this.pageNumber = 1;
    this.range = 10;
    this.pageNumbers = [];
    ResourceService.getPipedData().subscribe((data: any) => {
      this.numberOfItems = data;
      this.updateNumberPerPage();
    });
  }
  public emitPaginationProperties(): void {
    this.updateRange.emit({ range: this.range, page: this.pageNumber });
  }
  public updateNumberPerPage(): void {
    let numberPerPage = Math.ceil(this.numberOfItems / this.range);
    this.pageNumbers = Array(numberPerPage).fill(numberPerPage, 0).map((_, i) => i + 1);
    this.totalItems = numberPerPage;
    this.emitPaginationProperties();
    this.doPagenumbers();
  }
  public updatePagination(): void {
    this.updateNumberPerPage();
  }
  public nextPage(event: any): void {
    event.preventDefault();
    if (!this.isLastPage()) {
      this.pageNumber++;
      this.currentpage = this.pageNumber;
      this.seletedPage = this.currentpage;
    }
    this.updatePagination();
  }
  public previousPage(event: any): void {
    event.preventDefault();
    if (!this.isFirstPage()) {
      this.pageNumber--;
      this.currentpage = this.pageNumber;
      this.seletedPage = this.currentpage;
    }
    this.updatePagination();
  }
  public isLastPage(): boolean {
    return this.pageNumber === this.pageNumbers.length;
  }
  public isFirstPage(): boolean {
    return this.pageNumber === 1;
  }
  firstPage() {
    this.pageNumber = 1;
    this.currentpage = 1;
    this.seletedPage = this.currentpage;
    this.updatePagination();
  }
  lastPage() {
    this.pageNumber = this.totalItems;
    this.currentpage = this.totalItems;
    this.seletedPage = this.currentpage;
    this.updatePagination();
  }
  changeRange(number: any): void {
    event.preventDefault();
    this.range = number;
    this.pageNumber = 1;
    this.currentpage = 1;
    this.seletedPage = this.currentpage;
    this.updatePagination();
  }
  changePage(event: any, numberOfPage: number): void {
    event.preventDefault();
    this.pageNumber = numberOfPage;
    this.currentpage = numberOfPage;
    this.seletedPage = this.currentpage;
    this.updatePagination();
  }
  doPagenumbers() {
    var listFirst = this.pageList[0]
    var listLast = this.pageList[this.pageList.length - 1]
    var i: number, count: number;
    var remaining = this.totalItems % this.pageSize;
    var totalSize = ((this.totalItems));
    if (this.currentpage == 1) {
      this.pageList = [];
      for (i = 1, count = 0; i <= totalSize && count < this.pageSize; i++ , count++) {
        this.pageList.push(i);
      }
    }
    if (this.currentpage != this.totalItems + 1 && this.currentpage >= 1 && this.currentpage <= totalSize) {
      if (this.currentpage == 1) {
        this.pageList = [];
        for (i = 1, count = 0; i <= totalSize && count < this.pageSize; i++ , count++) {
          this.pageList.push(i);
        }
      }
      else if (listFirst > this.currentpage) {
        this.pageList = [];
        for (i = (this.currentpage + 1) - this.pageSize, count = 0; i <= totalSize && count < this.pageSize; i++ , count++) {
          this.pageList.push(i);
        }
      }
      else if (listLast < this.currentpage) {
        this.pageList = [];
        for (i = this.currentpage, count = 0; i <= totalSize && count < this.pageSize; i++ , count++) {
          this.pageList.push(i);
        }
      }
      this.validation();
    }
  }
  validation() {
    if (this.currentpage < this.totalItems) {
      this.nextItemValid = false;
    }
    else {
      this.nextItemValid = true;
    }
    if ((this.currentpage) > 1) {
      this.previousItemValid = false;
    }
    else {
      this.previousItemValid = true;
    }
  }
}
