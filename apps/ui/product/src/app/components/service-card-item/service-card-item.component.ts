import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-service-card-item',
  templateUrl: './service-card-item.component.html',
  styleUrls: ['./service-card-item.component.scss']
})
export class ServiceCardItemComponent implements OnInit {
  active: boolean;
  @HostBinding('style.cursor') cursor = "pointer";
  @HostListener("mouseenter") mouseEnter() {
    this.active = true;
  }

  @HostListener("mouseleave") mouseLeave() {
    this.active = false;
  }
  constructor() {
  }

  ngOnInit(): void {

  }
}
