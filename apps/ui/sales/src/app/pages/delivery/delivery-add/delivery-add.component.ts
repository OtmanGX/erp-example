import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldConfig } from '@tanglass-erp/material';
import { regConfigDelivery } from '@TanglassUi/sales/utils/forms';
import { DeliveryFacade, DraftFacade } from '@tanglass-erp/store/sales';
import * as ShortCompanieActions from '@TanglassStore/shared/lib/+state/short-company.actions';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import * as ContactActions from '@TanglassStore/contact/lib/actions/contact.actions';
import * as ShortCompanieSelectors from '@TanglassStore/shared/lib/+state/short-company.selectors';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';
import * as ContactSelectors from '@TanglassStore/contact/lib/selectors/contact.selectors';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DeliveryLineComponent } from '@TanglassUi/sales/pages/components/delivery-line/delivery-line.component';


@Component({
  selector: 'ngx-delivery-add',
  templateUrl: './delivery-add.component.html',
  styleUrls: ['./delivery-add.component.scss']
})
export class DeliveryAddComponent implements OnInit {
  regConfig: FieldConfig[];
  @ViewChild('table', {read: DeliveryLineComponent}) table;
  commandData = [
    {
      label: "Infos",
      isToolbar: false,
      cols: 2,
      icons: [],
      data : [
        { label: 'N° Commande', value: null },
        { label: 'Client', value: null },
        { label: 'Date de la commande', value: null },
        { label: 'Montant HT', value: null },
        { label: 'Taxes', value: null },
        { label: 'Total', value: null },
      ]
    }
  ];

  // Selectors
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany);
  customers$ = this.store.select(CustomerSelectors.getAllCustomers);
  contacts$ = this.store.select(ContactSelectors.getAllContacts);

  // Id for update reason
  deliveryId: string;

  constructor(
    private deliveryFacade: DeliveryFacade,
    private store: Store,
    private facade: DraftFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.deliveryId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.dispatchActions();
    this.buildForm();
  }
  dispatchActions() {
    this.store.dispatch(ShortCompanieActions.loadShortCompany());
    this.store.dispatch(CustomerActions.loadCustomers());
    this.store.dispatch(ContactActions.loadContacts());
  }

  buildForm() {
    this.regConfig = regConfigDelivery(
      null,
      this.customers$,
      this.companies$.pipe(map(e => e.map(company => ({ key: company.id, value: company.name })))),
      this.contacts$
      );
  }

  submit(value: any) {
    console.log(value);
    console.log(this.table.data);
    this.router.navigate(['/sales/delivery']);
    // if (this.deliveryId)
    //   this.deliveryFacade.updateDelivery(value);
    // else this.deliveryFacade.addDelivery(value);
  }
}
