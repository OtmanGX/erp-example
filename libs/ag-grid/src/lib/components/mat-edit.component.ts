import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Operations } from '../enums/operations';
import { GroupButton } from '../interfaces/group-button';

@Component({
  selector: 'ngx-mat-edit',
  template: `
    <button *ngIf="params.data?true:params.group" (click)="click()" mat-icon-button matTooltip="Modifier" color="accent">
      <mat-icon fontSet="fas" fontIcon="fa-edit"></mat-icon>
    </button>
    <span *ngIf="params.extra">
      <button *ngFor="let b of params.extra" (click)="click(b.event)" mat-icon-button [matTooltip]="b.tooltip" color="accent">
      <mat-icon>{{b.icon}}</mat-icon>
    </button>
    </span>
  `,
  styles: [
  ]
})
export class MatEditComponent implements ICellRendererAngularComp {
  params;
  extra: GroupButton[];
  constructor() { }

  agInit(params: ICellRendererParams|any): void {
    this.params = params;
    this.extra = params?.extra;
  }

  click(event?) {
    this.params.context.componentParent.triggerAction(event || Operations.update, this.params.data);
  }

  refresh(params: any): boolean {
    return false;
  }
}
