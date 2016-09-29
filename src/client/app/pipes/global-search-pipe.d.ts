import { ResourceService } from "../services/resource-service";
export declare class GlobalSearchPipe {
    resource: ResourceService;
    constructor(resource: ResourceService);
    transform(dataArr: any, filter: any): any;
}
