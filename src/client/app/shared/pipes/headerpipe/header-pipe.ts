import { Pipe, PipeTransform } from '@angular/core';
import {FiltersService} from '../../index';
import {ResourceService} from '../../index';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  constructor(public filtersService:FiltersService,
              public resource:ResourceService) {
  }

  transform(value:any, filters:any) {
    if (typeof value === 'undefined') {
      return;
    }
    this.resource.data = value.slice();

    if (typeof filters === 'undefined' || Object.keys(filters).length === 0) {
      return this.resource.data;
    }

    this.filtersService.update(filters.key, filters.value);
    let filtersArr = this.filtersService.get();

    value.forEach((item:any) => {
      for (var filterKey in filtersArr) {
        if (filtersArr.hasOwnProperty(filterKey)) {
          let element:any;
          if (typeof item[filterKey] === 'string') {
            element = item[filterKey].toLocaleLowerCase();
          }
          if (typeof item[filterKey] === 'object') {
            element = JSON.stringify(item[filterKey]);
          }
          if (typeof item[filterKey] === 'number') {
            element = item[filterKey].toString();
          }
          if (element.indexOf(filtersArr[filterKey].toLocaleLowerCase()) === -1) {
            this.resource.data.splice(this.resource.data.indexOf(item), 1);
            return;
          }
        }
      }
    });

    return this.resource.data;
  }
}
