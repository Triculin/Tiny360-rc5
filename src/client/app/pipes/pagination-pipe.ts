import {Pipe} from '@angular/core';
import {ResourceService} from "../services/resource-service";

@Pipe({
  name: 'pagination'
})

export class PaginationPipe {
  constructor(public resource:ResourceService) {
  }

  transform(value:any, filters:any) {
    let range = 10;
    if (typeof value === 'undefined') {
      return;
    }
    ResourceService.getPipedData().emit(value.length);
    let copiedArr = value.slice();

    if (typeof filters !== 'undefined') {
      range = filters.range;
      copiedArr = value.slice(range * (filters.page - 1));
    }

    return copiedArr.splice(0, range);
  }
}
