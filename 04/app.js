var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var option_item_1 = require('option-item');
var option_box_1 = require('option-box');
// Annotation section
var AppComponent = (function () {
    function AppComponent() {
        this.id = "2";
        this.title = 'Component-Demo';
    }
    AppComponent.prototype.setId = function (id) {
        this.id = id;
    };
    AppComponent.prototype.change = function (event, info) {
        console.log('change!');
        console.debug(event);
        console.debug(info);
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: 'app.html',
            directives: [option_item_1.OptionItem, option_box_1.OptionBox]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map