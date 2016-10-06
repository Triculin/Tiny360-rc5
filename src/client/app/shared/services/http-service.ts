import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class HttpService {

  url:string='http://localhost:8080/masterConfig';
url1:string='http://localhost:8080/pagesData';
  constructor(public http:Http) {

  }
  public getMasterConfig(): Observable<any> {
    return this.http.get(this.url)
      .map((responseData) => {
        return responseData.json();
      });
  }
   public getData(): Observable<any> {
    return this.http.get(this.url1)
      .map((responseData) => {
        return responseData.json();
      });
  }
}
