import { FiltersService } from "../services/filters-service";
import { ResourceService } from "../services/resource-service";
export declare class SearchPipe {
    filtersService: FiltersService;
    resource: ResourceService;
    constructor(filtersService: FiltersService, resource: ResourceService);
    transform(value: any, filters: any): any[];
}
