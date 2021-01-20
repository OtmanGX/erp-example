import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirectiveDirective {

  @HostBinding('style.cursor') cursor = "pointer";
  @HostBinding('class.light-purple-50') active: boolean;
  // [class.light-purple-50]="active"
  @HostListener("mouseenter") mouseEnter() {
    this.active = true;
  }

  @HostListener("mouseleave") mouseLeave() {
    this.active = false;
  }
  constructor(private elementRef: ElementRef<any>) { }

}
