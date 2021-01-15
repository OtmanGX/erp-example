import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { optionalServiceParam, Service } from '@tanglass-erp/core/product';

@Component({
  selector: 'ngx-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  service: Service = new Service('Coupe',
    '$',
    [{param: 'Diamètre'}, {param: 'Longueur'}]);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  addParam(value: string) {
    if (value.length)
      this.service.params.push({param: value});
  }

  deleteParam(param: optionalServiceParam) {
    this.service.params = this.service.params.filter(elem => elem.param !== param.param);
  }
}
