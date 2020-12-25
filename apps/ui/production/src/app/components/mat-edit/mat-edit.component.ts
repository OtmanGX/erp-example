import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'ngx-mat-edit',
  template: `
    <button (click)="click()" mat-icon-button matTooltip="Modifier"  color="accent">
      <mat-icon fontSet="fas" fontIcon="fa-edit"></mat-icon>
    </button>
  `,
  styles: [
  ]
})
export class MatEditComponent implements ICellRendererAngularComp {
  params;
  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  click() {
    this.params.context.componentParent.triggerAction('Edit');
  }

  refresh(params: any): boolean {
    return false;
  }
}
