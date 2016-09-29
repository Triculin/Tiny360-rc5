import {Pipe} from "@angular/core";
import {ResourceService} from "../services/resource-service";
@Pipe({
  name: 'global'
})

export class GlobalSearchPipe {
  constructor(public resource:ResourceService) {
  }

  transform(dataArr:any, filter:any) {
    if (typeof dataArr === "undefined") {
      return;
    }
    if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === "") {
      return this.resource.data=dataArr;
    }
    this.resource.data = [];
    dataArr.forEach((row:any) => {
      for (var value in row) {
        if (row.hasOwnProperty(value)) {
          let element:any;
          if (typeof row[value] === "object") {
            element = JSON.stringify(row[value]);
          }
          if (typeof row[value] === "boolean") {
            element = "" + row[value];
          }
          if (typeof row[value] === "string") {
            element = row[value].toLocaleLowerCase();
          }
          if (typeof row[value] === "number") {
            element = "" + row[value];
          }
          if (element.indexOf(filter["value"].toLocaleLowerCase()) >= 0) {
            this.resource.data.push(row);
            return;
          }
        }
      }
    });

    return this.resource.data;
  }
}