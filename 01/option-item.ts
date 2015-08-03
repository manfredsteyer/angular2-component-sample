import {Component, View, NgIf, EventEmitter, bootstrap} from 'angular2/angular2';
 
// Annotation section
@Component({
	selector: 'option-item',
	properties: ['selected', 'value'],
	events: ['change']
})
@View({
	templateUrl: 'option-item.html',
	directives: [NgIf]
})
// Component controller
export class OptionItem {
	
	selected: boolean;
	value: string;
	change: EventEmitter = new EventEmitter(); 
	
	select() {
		this.selected = !this.selected;	
		this.change.next({ target: this, selected: this.selected, value: this.value });
	}
	
}