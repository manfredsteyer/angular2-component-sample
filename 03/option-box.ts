import {Directive, View, NgIf, EventEmitter, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {OptionItem} from 'option-item';

@Directive({
	selector: 'option-box',
	properties: ['value'],
	events: ['valueChanged: value'],
	lifecycle: [LifecycleEvent.onChange]
})
export class OptionBox {
	 
	items = new Array<OptionItem>();
	value: string;
	valueChanged: any = new EventEmitter();
	
	constructor() {
	}
	
	registerItem(item: OptionItem) {
		this.items.push(item);
	}
	
	notifySelected(selectedItem: OptionItem) {
		
		if (selectedItem.selected) {
			this.value = selectedItem.value;
		}
		else {
			this.value = null;
		}
		
		this.valueChanged.next(this.value);
		
		for(var item of this.items) {
			if (item != selectedItem) {
				item.selected = false;
			}
		}
		
	}
	
	onChange() {
		
		for(var item of this.items) {
			if (item.selected && item.value != this.value) {
				item.selected = false;
			}
			
			if (!item.selected && item.value == this.value) {
				item.selected = true;
			}
			
		}
		
	}
}