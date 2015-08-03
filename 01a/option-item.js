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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
// Annotation section
var OptionItem = (function () {
    function OptionItem(elm, round) {
        this.change = new angular2_1.EventEmitter();
        console.log(elm.nativeElement.childNodes);
        if (round == 'true') {
            elm.nativeElement.firstElementChild.style.borderRadius = "5px";
        }
    }
    OptionItem.prototype.select = function () {
        this.selected = !this.selected;
        this.change.next({ target: this, selected: this.selected, value: this.value });
    };
    OptionItem.prototype.onChange = function () {
    };
    OptionItem = __decorate([
        angular2_1.Component({
            selector: 'option-item',
            properties: ['selected', 'value'],
            events: ['change'],
            lifecycle: [angular2_1.LifecycleEvent.onChange]
        }),
        angular2_1.View({
            templateUrl: 'option-item.html',
            directives: [angular2_1.NgIf]
        }),
        __param(1, angular2_2.Attribute('round')), 
        __metadata('design:paramtypes', [angular2_2.ElementRef, String])
    ], OptionItem);
    return OptionItem;
})();
exports.OptionItem = OptionItem;
//# sourceMappingURL=option-item.js.map