import {Injectable, EventEmitter} from '@angular/core';
@Injectable()
export class ResourceService {
  private static _pipedDataEmitter:any;
  public data:Array<any> = [];
  public keys:Array<any> = [];
  public key:any;
  public order:Array<any> = [];
  public previousData:Array<any> = [];


  static getPipedData():EventEmitter<any> {
    if (!this._pipedDataEmitter) {
      this._pipedDataEmitter = new EventEmitter();
    }
    return this._pipedDataEmitter;
  }

  public getOrder():Array<any> {
    return this.order[this.key];
  };

  public sortBy(key:string):Array<any> {
    this.key = key;
    if (Object.keys(this.order).length === 0) {
      this.order[this.key] = 'asc';
    }
    if (this.order[this.key] === 'asc') {
      this.order = [];
      this.order[this.key] = 'desc';
      this.data.sort((a, b) => this.compare(a, b));
    } else {
      this.order = [];
      this.order[this.key] = 'asc';
      this.data.sort((a, b) => this.compare(b, a));
    }
    return this.data;
  };

  private compare(a:Array<any>, b:Array<any>):number {
    if ((isNaN(parseFloat(a[this.key])) || !isFinite(a[this.key])) || (isNaN(parseFloat(b[this.key])) || !isFinite(b[this.key]))) {
      if (a[this.key]+''.toLowerCase() < b[this.key]+''.toLowerCase()) {
        return -1;
      }
      if (a[this.key]+''.toLowerCase() > b[this.key]+''.toLowerCase()) {
        return 1;
      }
    } else {
      if (parseFloat(a[this.key]) < parseFloat(b[this.key])) {
        return -1;
      }
      if (parseFloat(a[this.key]) > parseFloat(b[this.key])) {
        return 1;
      }
    }

    return 0;
  };
}
