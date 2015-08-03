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
var OptionBox = (function () {
    function OptionBox() {
        this.items = new Array();
        this.valueChanged = new angular2_1.EventEmitter();
    }
    OptionBox.prototype.registerItem = function (item) {
        this.items.push(item);
    };
    OptionBox.prototype.notifySelected = function (selectedItem) {
        if (selectedItem.selected) {
            this.value = selectedItem.value;
        }
        else {
            this.value = null;
        }
        this.valueChanged.next(this.value);
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item != selectedItem) {
                item.selected = false;
            }
        }
    };
    OptionBox = __decorate([
        angular2_1.Directive({
            selector: 'option-box',
            properties: ['value'],
            events: ['valueChanged: value']
        }), 
        __metadata('design:paramtypes', [])
    ], OptionBox);
    return OptionBox;
})();
exports.OptionBox = OptionBox;
//# sourceMappingURL=option-box.js.map