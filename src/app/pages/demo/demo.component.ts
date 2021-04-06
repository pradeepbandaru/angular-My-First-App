import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  });
  countryList = [{id: 1, name: 'USA'}, {id: 2, name: 'India'}];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.contactForm.value);
  }

}
