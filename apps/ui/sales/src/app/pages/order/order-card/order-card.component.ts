import { Component, OnInit } from '@angular/core';
import { OrdersFacade } from "@tanglass-erp/store/sales";
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderCardComponent implements OnInit {
  title = "Profile d'une société";
  id: string;
  step = null;
  data$ = this.facade.selectedOrders$;
  //draftData$=this.facade.
  passedData: any;
  constructor(
    private store: Store<AppState>,
    private location: Location,
    private facade:OrdersFacade)
   {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    this.data$.pipe(takeWhile(value => !value?.id, true)).subscribe(data => {
      this.passedData = [
        {
          label: "Infos Générales",
          isToolbar:"true",
          cols:3,
          icons:[{name:"edit",tooltip:"Modification",event:'editMain'}],
          data:
            [
              { label: 'ID.', value: data?.id },
              { label: 'Société', value: data?.company.name },
              { label: 'Client', value: data?.customer.name },
              { label: 'Tél', value: data?.customer.phone },
              { label: 'Date', value: data?.date },
              { label: 'Date limite ', value: data?.deadline, },
              { label: 'Status', value: data?.status },
              { label: 'Réf', value: data?.draft_id},
            ]
        },
      ];
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
   console.log(event)
  }
}

