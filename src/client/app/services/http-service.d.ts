import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
export declare class HttpService {
    http: Http;
    constructor(http: Http);
    getData(url: string): Observable<any>;
}
