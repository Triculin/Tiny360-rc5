System.register(['@angular/core', "../services/resource-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, resource_service_1;
    var PaginationPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            }],
        execute: function() {
            PaginationPipe = (function () {
                function PaginationPipe(resource) {
                    this.resource = resource;
                }
                PaginationPipe.prototype.transform = function (value, filters) {
                    var range = 10;
                    if (typeof value === 'undefined') {
                        return;
                    }
                    resource_service_1.ResourceService.getPipedData().emit(value.length);
                    var copiedArr = value.slice();
                    if (typeof filters !== 'undefined') {
                        range = filters.range;
                        copiedArr = value.slice(range * (filters.page - 1));
                    }
                    return copiedArr.splice(0, range);
                };
                PaginationPipe = __decorate([
                    core_1.Pipe({
                        name: 'pagination'
                    }), 
                    __metadata('design:paramtypes', [resource_service_1.ResourceService])
                ], PaginationPipe);
                return PaginationPipe;
            }());
            exports_1("PaginationPipe", PaginationPipe);
        }
    }
});
//# sourceMappingURL=pagination-pipe.js.map