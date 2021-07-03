import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InvoiceFacade } from '@tanglass-erp/store/sales';

@Component({
  selector: 'ngx-invoice-ready',
  templateUrl: './invoice-ready.component.html',
  styleUrls: ['./invoice-ready.component.scss']
})
export class InvoiceReadyComponent implements OnInit {
  invoice: any;

  constructor(private location:Location, private invoiceFacade: InvoiceFacade,) { }

  ngOnInit(): void {
    this.invoice = (<any>this.location.getState()).data;
  }

  print() {
    this.invoiceFacade.printInvoice(this.invoice);
  }

}
