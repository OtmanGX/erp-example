import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-service-card-item',
  templateUrl: './service-card-item.component.html',
  styleUrls: ['./service-card-item.component.scss']
})
export class ServiceCardItemComponent implements AfterViewInit {
  @Input() data;
  @Input() showActions = false;
  constructor() {
  }

  ngAfterViewInit(): void {
  }
}
