import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'iDirty records';
    welcomeText = 'Hey guys! Welcome to';
    constructor(private activatedRoute: ActivatedRoute) { }

    testFunction() {
        console.log(this.activatedRoute);
    }
}
