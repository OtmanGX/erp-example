import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormComponent, FieldConfig } from '@tanglass-erp/material';
import { regConfigDelivery } from '@TanglassUi/sales/utils/forms';
import { DeliveryFacade, DraftFacade, Order, OrdersFacade } from '@tanglass-erp/store/sales';
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
export class DeliveryAddComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('table', { read: DeliveryLineComponent }) table;
  @ViewChild('form', { read: DynamicFormComponent }) form;

  regConfig: FieldConfig[];

  // Selectors
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany);
  customers$ = this.store.select(CustomerSelectors.getAllCustomers);
  contacts$ = this.store.select(ContactSelectors.getAllContacts);
  orders$ = this.ordersFacade.allOrders$;
  selectedOrder$ = this.ordersFacade.selectedOrder$;
  selectedOrder: Order;

  // Id for update reason
  deliveryId: string;

  commandData = [];


  constructor(
    private deliveryFacade: DeliveryFacade,
    private store: Store,
    private draftFacade: DraftFacade,
    private ordersFacade: OrdersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.deliveryId = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.dispatchActions();
    this.buildForm();
  }

  ngAfterViewInit(): void {
    const orderField = this.form.getField('order');
    const companyField = this.form.getField('company');
    const clientField = this.form.getField('client');
    this.selectedOrder$.subscribe(
      value => {
        this.selectedOrder = value;
        this.setColumnsData();
        companyField.patchValue(value.company.id);
        clientField.patchValue(value.customer.id);
      });
    orderField.valueChanges.subscribe(value => {
      this.ordersFacade.selectOrder(value);
    });
  }

  setColumnsData() {
    this.commandData = [
      {
        label: 'Infos',
        isToolbar: false,
        cols: 2,
        icons: [],
        data: [
          { label: 'N° Commande', value: this.selectedOrder?.id },
          { label: 'Client', value: this.selectedOrder?.customer?.name },
          { label: 'Date de la commande', value: this.selectedOrder?.date, type: 'date' },
          { label: 'Montant HT', value: this.selectedOrder?.total_ht },
          { label: 'Taxes', value: this.selectedOrder?.total_tax },
          { label: 'Total TTC', value: this.selectedOrder?.total_ttc }
        ]
      }
    ];
  }

  dispatchActions() {
    this.ordersFacade.loadAllOrders();
    this.store.dispatch(ShortCompanieActions.loadShortCompany());
    this.store.dispatch(CustomerActions.loadCustomers());
    this.store.dispatch(ContactActions.loadContacts());
  }

  buildForm() {
    this.regConfig = regConfigDelivery(
      null,
      this.orders$,
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

  ngOnDestroy(): void {
    this.ordersFacade.clearSelection();
  }
}
