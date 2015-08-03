import {Component, View, NgIf, EventEmitter, Ancestor, Optional, bootstrap} from 'angular2/angular2';
import {OptionBox} from 'option-box';
 
@Component({
	selector: 'option-item',
	properties: ['selected', 'value'],
	events: ['change']
})
@View({
	templateUrl: 'option-item.html',
	directives: [NgIf]
})
export class OptionItem {
	
	selected: boolean;
	value: string;
	change: EventEmitter = new EventEmitter(); 
	box: OptionBox;
	
	constructor(@Optional() @Ancestor() box: OptionBox) {
		this.box = box;
		if (this.box != null) {
			this.box.registerItem(this);
		}
	}
	
	select() {
		this.selected = !this.selected;	
		this.change.next({ target: this, selected: this.selected, value: this.value });
		
		if (this.box != null) {
			this.box.notifySelected(this);
		}
	}
}