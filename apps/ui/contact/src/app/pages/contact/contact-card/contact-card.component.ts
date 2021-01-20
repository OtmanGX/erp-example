import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import * as ContactActions from '@TanglassStore/contact/lib/actions/contact.actions';
import * as ContactSelectors from '@TanglassStore/contact/lib/selectors/contact.selectors';

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
  data = this.store.select(ContactSelectors.getSelectedContact);
  passedData: any;
  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    this.store.dispatch(ContactActions.loadContactById({id: this.id}));
    this.data.subscribe( data => {
      this.passedData = [
        {label: 'Nom', value: data?.name},
        {label: 'Code', value: data?.code},
        {label: 'Note', value: data?.note},
        {label: 'E-mail', value: data?.mail},
        {label: 'Téléphone', value: data?.phone},
      ];
    });
  }

}
