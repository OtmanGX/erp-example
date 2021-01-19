import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-service-glass-card',
  templateUrl: './service-glass-card.component.html',
  styleUrls: ['./service-glass-card.component.scss']
})
export class ServiceGlassCardComponent implements OnInit {
  title = "Service Verre";
  id: string;
  data: any = of(null);
  passedData: any;

  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    // this.store.dispatch();
    this.data.subscribe(value => {
      this.passedData = [
        {label: 'Nom', value: value?.service?.name},
        {label: 'Paramètres', value: value?.service?.name},
        {label: 'Type de verre', value: value?.glass?.type},
        {label: 'Couleur de verre', value: value?.glass?.color},
        {label: 'Epaisseur de verre', value: value?.glass?.thickness},
      ];
    });
  }
}
