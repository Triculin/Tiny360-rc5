System.register(["@angular/core", "../services/resource-service"], function(exports_1, context_1) {
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
    var GlobalSearchPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            }],
        execute: function() {
            GlobalSearchPipe = (function () {
                function GlobalSearchPipe(resource) {
                    this.resource = resource;
                }
                GlobalSearchPipe.prototype.transform = function (dataArr, filter) {
                    var _this = this;
                    if (typeof dataArr === "undefined") {
                        return;
                    }
                    if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === "") {
                        return dataArr;
                    }
                    this.resource.data = [];
                    dataArr.forEach(function (row) {
                        for (var value in row) {
                            if (row.hasOwnProperty(value)) {
                                var element = void 0;
                                if (typeof row[value] === "object") {
                                    element = JSON.stringify(row[value]);
                                }
                                if (typeof row[value] === "boolean") {
                                    element = "" + row[value];
                                }
                                if (typeof row[value] === "string") {
                                    element = row[value].toLocaleLowerCase();
                                }
                                if (typeof row[value] === "number") {
                                    element = "" + row[value];
                                }
                                if (element.indexOf(filter["value"].toLocaleLowerCase()) >= 0) {
                                    _this.resource.data.push(row);
                                    return;
                                }
                            }
                        }
                    });
                    return this.resource.data;
                };
                GlobalSearchPipe = __decorate([
                    core_1.Pipe({
                        name: 'global'
                    }), 
                    __metadata('design:paramtypes', [resource_service_1.ResourceService])
                ], GlobalSearchPipe);
                return GlobalSearchPipe;
            }());
            exports_1("GlobalSearchPipe", GlobalSearchPipe);
        }
    }
});
//# sourceMappingURL=global-search-pipe.js.map