import { EventEmitter } from '@angular/core';
import {ResourceService} from '../index';
import { ConfigService } from '../index';
export declare class Pagination {
    resource: ResourceService;
    config: ConfigService;
    private pageNumber;
    private range;
    pageNumbers: Array<any>;
    constructor(resource: ResourceService, config: ConfigService);
    emitPaginationProperties(): void;
    updateNumberPerPage(): void;
    updatePagination(): void;
    isActiveRange(currentRange: Number): boolean;
    isActivePage(currentPage: Number): boolean;
    nextPage(event: any): void;
    previousPage(event: any): void;
    isLastPage(): boolean;
    isFirstPage(): boolean;
    numberOfItems: number;
    updateRange: EventEmitter<{}>;
    ngOnChanges(): void;
    changeRange(event: any, number: any): void;
    changePage(event: any, numberOfPage: any): void;
}
