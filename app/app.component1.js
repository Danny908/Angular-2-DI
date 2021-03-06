"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_valueService_1 = require('./app.valueService');
var Componente1 = (function () {
    function Componente1(values) {
        this.values = values;
    }
    Componente1.prototype.getData = function () {
        this.data = this.values.getRandomValues();
    };
    Componente1.prototype.addData = function (data) {
        this.values.insertValues(data);
    };
    Object.defineProperty(Componente1.prototype, "arrayVal", {
        get: function () { return JSON.stringify(this.values.data); },
        enumerable: true,
        configurable: true
    });
    Componente1 = __decorate([
        core_1.Component({
            selector: 'my-component1',
            template: "\n\t{{arrayVal}}\n\t<h1>Component 1</h1>\n\t<p>Random values</p>\n\t<button class=\"btn btn-default\" (click)=\"getData()\">Get!</button>\n\t<label>You get: {{data}}</label>\n\t<br>\n\t<input class=\"form-inline\" placeholder=\"Add Items\" #input>\n\t<button class=\"btn btn-default\" (click)=\"addData(input.value)\">Add</button>\n\t",
        }), 
        __metadata('design:paramtypes', [app_valueService_1.valueService])
    ], Componente1);
    return Componente1;
}());
exports.Componente1 = Componente1;
//# sourceMappingURL=app.component1.js.map