import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  title = "Contact";
  gap = "50px";
  id: string;
  step = null;
  data: any;
  passedData: any;
  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>location.getState()).id;
      this.passedData = [
        {label: 'Nom', value: this.data?.name},
        {label: 'Code', value: this.data?.code},
        {label: 'Note', value: this.data?.note},
        {label: 'E-mail', value: this.data?.mail},
        {label: 'Téléphone', value: this.data?.phone},
      ];
  }

  ngOnInit(): void {
  }

}
