import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as _ from 'lodash';
import { MatièrePremière } from '../../../../../../../../libs/core/product/src/lib/models/glasse.model';
import { Accessory } from '../../../../../../../../libs/core/product/src/lib/models/accessoire.model';
import { Service } from '../../../../../../../../libs/core/product/src/lib/models/service.model';
import { Consumable } from '../../../../../../../../libs/core/product/src/lib/models/consommable.model';
import { SystemApparent } from '@TanglassCore/models/produit/systemApparent.model';

type ProductType =
  | MatièrePremière
  | Accessory
  | Service
  | Consumable
  | SystemApparent;

type ProductTypeIntersection = MatièrePremière &
  Accessory &
  Service &
  Consumable &
  SystemApparent;
type ProductTypeList =
  | MatièrePremière[]
  | Accessory[]
  | Service[]
  | Consumable[]
  | SystemApparent[];

interface Value {
  textField: string;
  data: ProductTypeIntersection[];
  filtrageArgs: string[];
  instance: ProductType;
}
@Component({
  selector: 'ngx-multi-select-render',
  template: `
    <ng-multiselect-dropdown
      [(ngModel)]="selectedItems"
      [settings]="dropdownSettings"
      [data]="data"
      (onSelect)="onItemSelect($event)"
    >
    </ng-multiselect-dropdown>
  `,
  styleUrls: ['./select-render.component.scss'],
})
export class SelectRenderComponent implements OnInit {
  @Input()
  readonly value;
  @Input()
  rowData: any;
  selectedItems = [];
  data: MatièrePremière[] | Accessory[] | Service[];
  dropdownSettings: IDropdownSettings;

  @Output() emitRow = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: this.value.textField,
      allowSearchFilter: true,
      maxHeight: 180,
      closeDropDownOnSelection: true,
    };
    if (this.rowData.item[this.value.textField]) {
      this.selectedItems = [this.rowData.item];
      this.data = _.uniqBy(this.value.data, this.value.textField);
    } else if (this.value.data && this.value.data.length == 1) {
      this.selectedItems = [this.value.data[0]];
      this.rowData.item = this.value.data[0];
      this.data = this.value.data;
      this.emitRow.emit(this.rowData);
    } else {
      this.data = this.filtredData();
    }
  }
  filtredData(): MatièrePremière[] {
    let filterdList = this.value.data;
    let filtreArgs = this.value.filtrageArgs;
    for (let arg of filtreArgs) {
      if (this.rowData.item[arg] && arg !== this.value.textField) {
        let param = this.rowData.item[arg];
        filterdList = filterdList.filter(function (e) {
          return e[arg] == param;
        });
      }
    }
    filterdList = _.uniqBy(filterdList, this.value.textField);
    return filterdList;
  }

  onItemSelect(item: any) {
    let array = this.value.data;
    let arg = this.value.textField;
    var obj = array.filter(function (e) {
      return e[arg] == item[arg];
    });
    if (obj[1]) {
      for (let argum of this.value.filtrageArgs) {
        if (this.rowData.item[argum] && argum !== this.value.textField) {
          let epaisseur = this.rowData.item.epaisseur;
          this.rowData.item = this.value.instance;
          this.rowData.item.epaisseur = epaisseur;
          break;
        }
      }
      this.rowData.item[arg] = item[arg];
    } else {
      this.rowData.item = obj[0];
    }
    this.emitRow.emit(this.rowData);
  }
}
