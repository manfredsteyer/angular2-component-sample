import {Component, View, bootstrap} from 'angular2/angular2';
import {OptionItem} from 'option-item';
import {OptionBox} from 'option-box';

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
 	templateUrl: 'app.html',
	directives: [OptionItem, OptionBox] 
}) 
// Component controller
class AppComponent {
	title: string;
	
	value: string = "2";
	
	constructor() {
		this.title = 'Component-Demo';
	}
	
	setValue(value: string) {
		this.value = value;
	}
	
	reset() {
		this.value = "1";
	}
	
	change(event, info) {
		console.log('change!');
		console.debug(event);
		console.debug(info);
	}
	
	
	
}

bootstrap(AppComponent);

