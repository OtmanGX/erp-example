import { Component, OnInit } from '@angular/core';
import { OrdersFacade } from "@tanglass-erp/store/sales";
import { DraftFacade } from "@tanglass-erp/store/sales";

@Component({
  selector: 'ngx-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {


  data = this.draftFacade.selectedDraft$;

  constructor(
    private ordersFacade:OrdersFacade,
    private draftFacade:DraftFacade
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
  }


  save(){
  }

}
