import {Component, View, NgIf, EventEmitter, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {ElementRef, Attribute} from 'angular2/angular2';
 
// Annotation section
@Component({
	selector: 'option-item',
	properties: ['selected', 'value'],
	events: ['change'],
	lifecycle: [LifecycleEvent.onChange]
})
@View({
	templateUrl: 'option-item.html',
	directives: [NgIf]
})
// Component controller
export class OptionItem {
	
	selected: boolean;
	value: string;
	change: any = new EventEmitter(); 
	
	constructor(elm: ElementRef, @Attribute('round') round: string) {
		console.log(elm.nativeElement.childNodes);
		if (round == 'true') {
			elm.nativeElement.firstElementChild.style.borderRadius = "5px";
		}
	}
	 
	select() {
		this.selected = !this.selected;	
		this.change.next({ target: this, selected: this.selected, value: this.value });
	}
	
	onChange() {
	}
	
}