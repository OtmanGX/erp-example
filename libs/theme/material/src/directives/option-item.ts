import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[optionItem]'
})
export class OptionItemDirective implements OnInit{
  @Input() options: Array<any>;
  @Input() item: any;
  @Input() delimiter = ' | ';

  constructor(public elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const arrToJoin = [];
    this.options.forEach(elem => arrToJoin.push(this.item[elem]));
    this.elementRef.nativeElement.innerHTML = arrToJoin.join(this.delimiter);
  }
}
