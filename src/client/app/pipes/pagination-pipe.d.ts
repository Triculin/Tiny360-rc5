import { ResourceService } from "../services/resource-service";
export declare class PaginationPipe {
    resource: ResourceService;
    constructor(resource: ResourceService);
    transform(value: any, filters: any): any;
}
