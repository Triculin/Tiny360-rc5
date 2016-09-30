System.register(['@angular/core', "../services/filters-service", "../services/resource-service"], function(exports_1, context_1) {
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
    var core_1, filters_service_1, resource_service_1;
    var SearchPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (filters_service_1_1) {
                filters_service_1 = filters_service_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            }],
        execute: function() {
            SearchPipe = (function () {
                function SearchPipe(filtersService, resource) {
                    this.filtersService = filtersService;
                    this.resource = resource;
                }
                SearchPipe.prototype.transform = function (value, filters) {
                    var _this = this;
                    if (typeof value === "undefined") {
                        return;
                    }
                    this.resource.data = value.slice();
                    if (typeof filters === 'undefined' || Object.keys(filters).length === 0) {
                        return this.resource.data;
                    }
                    this.filtersService.update(filters.key, filters.value);
                    var filtersArr = this.filtersService.get();
                    value.forEach(function (item) {
                        for (var filterKey in filtersArr) {
                            if (filtersArr.hasOwnProperty(filterKey)) {
                                var element = void 0;
                                if (typeof item[filterKey] === "string") {
                                    element = item[filterKey].toLocaleLowerCase();
                                }
                                if (typeof item[filterKey] === "object") {
                                    element = JSON.stringify(item[filterKey]);
                                }
                                if (typeof item[filterKey] === "number") {
                                    element = item[filterKey].toString();
                                }
                                if (element.indexOf(filtersArr[filterKey].toLocaleLowerCase()) === -1) {
                                    _this.resource.data.splice(_this.resource.data.indexOf(item), 1);
                                    return;
                                }
                            }
                        }
                    });
                    return this.resource.data;
                };
                SearchPipe = __decorate([
                    core_1.Pipe({
                        name: 'search'
                    }), 
                    __metadata('design:paramtypes', [filters_service_1.FiltersService, resource_service_1.ResourceService])
                ], SearchPipe);
                return SearchPipe;
            }());
            exports_1("SearchPipe", SearchPipe);
        }
    }
});
//# sourceMappingURL=header-pipe.js.map