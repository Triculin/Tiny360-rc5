import {Injectable} from '@angular/core';
@Injectable()
export class ConfigService {
    public searchEnabled = true;
    public orderEnabled = true;
    public globalSearchEnabled = true;
    public footerEnabled = false;
    public paginationEnabled = true;
    public exportEnabled = true;
    public editEnabled = false;
    public resourceUrl = 'app/data.json';
    public rows = 10;
}
