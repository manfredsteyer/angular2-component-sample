import {Directive, View, NgIf, EventEmitter, bootstrap} from 'angular2/angular2';
import {OptionItem} from 'option-item';

@Directive({
	selector: 'option-box'
})
export class OptionBox {
	
	items = new Array<OptionItem>();
	
	constructor() {
	}
	
	registerItem(item: OptionItem) {
		this.items.push(item);
	}
	
	notifySelected(selectedItem: OptionItem) {
		
		for(var item of this.items) {
			if (item != selectedItem) {
				item.selected = false;
			}
		}
		
	}
}