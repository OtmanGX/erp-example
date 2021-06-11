import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-invoice-ready',
  templateUrl: './invoice-ready.component.html',
  styleUrls: ['./invoice-ready.component.scss']
})
export class InvoiceReadyComponent implements OnInit {
  invoice: any;

  constructor(private location:Location) { }

  ngOnInit(): void {
    this.invoice = (<any>this.location.getState()).data;
    console.log(this.invoice);
  }

}
