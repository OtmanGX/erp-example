import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../libs/store/app/src';

@Component({
  selector: 'ngx-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  title = "Service";
  id: string;
  data: any = of({params: []});
  passedData: any;
  params: any;

  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    // this.store.dispatch(loadServiceById);
    this.data.subscribe(value => {
      this.passedData = [
        { label: 'Nom', value: value?.name },
        { label: 'Paramètres', value: null },
      ];
      this.params = value?.params;
    });
  }

  addParam(value: string) {
    if (value.length)
      this.params.push({param: value});
  }

  deleteParam(param) {
    this.params = this.params.filter(elem => elem.param !== param.param);
  }
}
