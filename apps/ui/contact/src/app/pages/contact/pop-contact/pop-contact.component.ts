import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigContactDetailed } from '../../../utils/forms';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { combineLatest, concat, forkJoin, merge, of } from 'rxjs';
import * as ProviderSelectors from '@TanglassStore/contact/lib/selectors/provider.selectors';
import { combineAll, map, mergeAll, mergeMap, take, takeUntil, takeWhile } from 'rxjs/operators';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import * as ProviderActions from '@TanglassStore/contact/lib/actions/provider.actions';

@Component({
  selector: 'ngx-pop-contact',
  templateUrl: './pop-contact.component.html',
  styleUrls: ['./pop-contact.component.scss'],
})
export class PopContactComponent extends FormDialog {

  regConfig: Groupfield[] = [];
  title = "Ajouter un contact";

  constructor(
    public dialogRef: MatDialogRef<PopContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {
    super(dialogRef, data);
  }


  ngOnInit() {
    this.store.dispatch(ProviderActions.loadProviders());
    this.store.dispatch(CustomerActions.loadCustomers());
    super.ngOnInit();
  }

  buildForm(): void {
    const customers = [];
    const providers = [];
    const source = combineLatest([
        this.store.select(CustomerSelectors.getAllCustomers),
        this.store.select(ProviderSelectors.getAllProviders)
      ]
      );
    source.pipe(
      map(res => ({customers: res[0], providers: res[1]})),
      take(2)
    ).subscribe(value => {
      console.log('providers', value.providers);
      console.log('customers', value.providers);
    });

    // source.subscribe(value => {
    //   console.log('fetch', value);
    // });
    // forkJoin([
    //   this.store.select(CustomerSelectors.getAllCustomers),
    //   this.store.select(ProviderSelectors.getAllProviders)
    // ]).subscribe(value => {
    //   console.log('done');
    //   this.regConfig = regConfigContactDetailed(this.data, value[0], value[1]);
    // }, error => console.log(error));
    // this.store.select(CustomerSelectors.getAllCustomers).subscribe(value => {
    //   const customers = value.map(elem => ({key: elem.id, value: elem.name}));
    //   this.regConfig = regConfigContactDetailed(this.data, customers);
    // });
  }
}
