import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(public mainService: MainService) {}

	ngOnInit() {
		/*console.log(window.innerWidth);*/
	    window.addEventListener('scroll', () => {
      		console.log(window.pageYOffset);
  		}, true);
	}
  
}
