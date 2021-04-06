import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  constructor(private router:Router) {

  }
  navigatetoDemo() {
    this.router.navigateByUrl('demo');
  }
}
