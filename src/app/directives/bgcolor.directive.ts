import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective implements OnInit {

  constructor(public el: ElementRef) { 

  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

}
