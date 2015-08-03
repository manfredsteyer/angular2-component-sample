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
var option_box_1 = require('option-box');
var OptionItem = (function () {
    function OptionItem(box) {
        this.change = new angular2_1.EventEmitter();
        this.box = box;
        if (this.box != null) {
            this.box.registerItem(this);
        }
    }
    OptionItem.prototype.select = function () {
        this.selected = !this.selected;
        this.change.next({ target: this, selected: this.selected, value: this.value });
        if (this.box != null) {
            this.box.notifySelected(this);
        }
    };
    OptionItem = __decorate([
        angular2_1.Component({
            selector: 'option-item',
            properties: ['selected', 'value'],
            events: ['change']
        }),
        angular2_1.View({
            templateUrl: 'option-item.html',
            directives: [angular2_1.NgIf]
        }),
        __param(0, angular2_1.Optional()),
        __param(0, angular2_1.Ancestor()), 
        __metadata('design:paramtypes', [option_box_1.OptionBox])
    ], OptionItem);
    return OptionItem;
})();
exports.OptionItem = OptionItem;
//# sourceMappingURL=option-item.js.map