import {Pipe, PipeTransform} from '@angular/core';
import {ResourceService } from '../../index';
@Pipe({
  name: 'global'
})

export class GlobalSearchPipe implements PipeTransform {
  filter: any;
  constructor(public resource: ResourceService) {
  }
  transform(dataArr: any, searchstring: any,field:any) {

    this.filter = { value: searchstring };
    if (typeof dataArr === 'undefined') {
      return;
    }
    if (typeof this.filter === 'undefined' || Object.keys(this.filter).length === 0 || this.filter === '') {
      return this.resource.data = dataArr;
    }
    this.resource.data = [];
    dataArr.forEach((row: any) => {
      for (var value in row) {
        if (row.hasOwnProperty(value)) {
          let element: any;
          if (typeof row[value] === 'object') {
            element = JSON.stringify(row[value]);
          }
          if (typeof row[value] === 'boolean') {
            element = '' + row[value];
          }
          if (typeof row[value] === 'string') {
            element = row[value].toLocaleLowerCase();
          }
          if (typeof row[value] === 'number') {
            element = '' + row[value];
          }
          if (element.indexOf(this.filter['value'].toLocaleLowerCase()) >= 0) {
            this.resource.data.push(row);
            return;
          }
        }
      }
    });
    return this.resource.data;
  }
}
