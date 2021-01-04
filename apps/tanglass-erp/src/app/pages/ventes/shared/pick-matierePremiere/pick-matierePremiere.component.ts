import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
import * as _ from 'lodash';
import { LocalDataSource } from 'ng2-smart-table';
import { MatierePremiere_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { MatièrePremière } from '../../../../../../../../libs/core/product/src/lib/models/glasse.model';
import { InputRenderComponent } from '../input-render-component/input-render.component';
import { SelectRenderComponent } from '../for-select-render-component/select-render.component';
import { UniSelectRenderComponent } from '../select-render-component/uni-select-render.component';
import { InputDimensionsRenderComponent } from '../input-render-dimensions/input-render-dimensions.component';
import { InputPriceRenderComponent } from '../input-render-component/input-price-render.component';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
@Component({
  selector: 'ngx-pick-matierePremiere',
  templateUrl: './pick-matierePremiere.component.html',
  styleUrls: ['./pick-matierePremiere.component.scss'],
})
export class PickMatierePremiereComponent implements OnInit, OnChanges {
  @Output() sendSelectedRows = new EventEmitter<any>();
  @Output() sendMatierePremiere = new EventEmitter<any>();
  @Output() sendIsVerreClient = new EventEmitter<any>();
  @Input() disabled: boolean;
  items: MatierePremiere_purchases[] = [];

  data: MatièrePremière[];
  selectedRows = [];
  filtrageArgs = ['code', 'type', 'color'];
  source: LocalDataSource = new LocalDataSource();

  settings = {
    selectMode: 'multi',
    hideHeader: false,
    hideSubHeader: true,
    noDataMessage: ' Pas de données',
    actions: {
      position: 'right',
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    edit: false,
    columns: {
      count: {
        title: 'N°',
        type: 'string',
      },
      code: {
        title: 'Code',
        type: 'custom',
        renderComponent: SelectRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return {
            textField: 'code',
            data: this.getFiltredRowData(row),
            filtrageArgs: this.filtrageArgs,
            instance: new MatièrePremière(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: MatierePremiere_purchases) => {
            this.replaceRow(row);
          });
        },
        width: '130px',
      },
      type: {
        title: 'Type',
        type: 'custom',
        renderComponent: SelectRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return {
            textField: 'type',
            data: this.getFiltredRowData(row),
            filtrageArgs: this.filtrageArgs,
            instance: new MatièrePremière(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: MatierePremiere_purchases) => {
            if (row) {
              this.replaceRow(row);
            }
          });
        },
        width: '120px',
      },
      color: {
        title: 'Couleur',
        type: 'custom',
        renderComponent: SelectRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return {
            textField: 'color',
            data: this.getFiltredRowData(row),
            filtrageArgs: this.filtrageArgs,
            instance: new MatièrePremière(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: MatierePremiere_purchases) => {
            if (row) {
              this.replaceRow(row);
            }
          });
        },
        width: '120px',
      },
      libelle: {
        title: 'Libellé',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return row.item.libelle;
        },
      },
      epaisseur: {
        title: 'Epaisseur',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return String(row.item.epaisseur) + 'mm';
        },
      },
      pieces: {
        title: 'Quantité',
        type: 'custom',
        renderComponent: InputRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'pieces';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: MatierePremiere_purchases) => {
            this.replaceRow(row);
          });
        },
      },
      prix_default: {
        title: 'P.U',
        type: 'custom',
        renderComponent: InputPriceRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'prix_default';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: MatierePremiere_purchases) => {
            this.replaceRow(row);
          });
        },
      },
      largeur: {
        title: 'Largeur',
        type: 'custom',
        renderComponent: InputDimensionsRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'largeur';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row) => {
            this.replaceRow(row);
          });
        },
      },
      hauteur: {
        title: 'Hauteur',
        type: 'custom',
        renderComponent: InputDimensionsRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'hauteur';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row) => {
            this.replaceRow(row);
          });
        },
      },
      total_purchase: {
        title: 'Montant HT',
        type: 'number',
      },
      companie: {
        title: 'société',
        type: 'custom',
        renderComponent: UniSelectRenderComponent,
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.companie;
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: MatierePremiere_purchases) => {
            this.replaceRow(row);
          });
        },
      },
    },
  };
  settingsAsFiche = {
    hideHeader: false,
    hideSubHeader: true,
    actions: false,
    noDataMessage: ' Pas de données',
    columns: {
      count: {
        title: 'N°',
        type: 'string',
      },
      code: {
        title: 'Code',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.item.code;
        },
      },
      type: {
        title: 'Type',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.item.type;
        },
      },
      color: {
        title: 'Couleur',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.item.color;
        },
      },
      libelle: {
        title: 'Libellé',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.item.libelle;
        },
      },
      epaisseur: {
        title: 'Epaisseur',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.item.epaisseur;
        },
      },
      pieces: {
        title: 'Quantité',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.pieces;
        },
      },
      prix_default: {
        title: 'P.U',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.item.prix_default;
        },
      },
      largeur: {
        title: 'Largeur',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.largeur;
        },
      },
      hauteur: {
        title: 'Hauteur',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.hauteur;
        },
      },
      total_purchase: {
        title: 'Montant HT',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.total_purchase;
        },
      },
      companie: {
        title: 'société',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          return row.companie;
        },
      },
    },
  };
  listesVerre = [
    { code: 'V3', title: 'Verre 3mm', epaisseur: 3 },
    { code: 'V4', title: 'Verre 4mm', epaisseur: 4 },
    { code: 'V5', title: 'Verre 5mm', epaisseur: 5 },
    { code: 'V6', title: 'Verre 6mm', epaisseur: 6 },
    { code: 'V8', title: 'Verre 8mm', epaisseur: 8 },
    { code: 'V10', title: 'Verre 10mm', epaisseur: 10 },
    { code: 'V12', title: 'Verre 12mm', epaisseur: 12 },
    { code: 'V15', title: 'Verre 15mm', epaisseur: 15 },
    { code: 'V19', title: 'Verre 19mm', epaisseur: 19 },
  ];

  constructor(
    private readonly matierePremiereService: MatierePremiereMockService
  ) {}

  ngOnInit(): void {
    if (!this.disabled) {
      this.getAllMatierePremiere();
    }
  }
  ngOnChanges(): void {
    if (!this.disabled) {
      this.getAllMatierePremiere();
    }
  }

  setIsVerreClient(): void {
    this.sendIsVerreClient.emit(true);
  }
  addMatierePremiere(epaisseur): void {
    let mat_premiere = new MatierePremiere_purchases();
    mat_premiere.item.epaisseur = epaisseur;
    mat_premiere.count = this.items.length + 1;
    this.items = [...this.items, ...[mat_premiere]];
    this.source.load(this.items);
  }

  getAllMatierePremiere(): void {
    this.matierePremiereService.getAll().subscribe({
      next: (matierePremieres) => {
        this.data = matierePremieres;
      },
    });
  }

  onUserRowSelect(event): void {
    this.selectedRows = event.selected;
    this.sendSelectedRows.emit(this.selectedRows);
  }
  getFiltredRowData(row): MatièrePremière[] {
    let rowData = this.data;
    if (row.item.epaisseur) {
      rowData = rowData.filter(function (element) {
        return element.epaisseur == row.item.epaisseur;
      });
    }
    return rowData;
  }

  replaceRow(row: MatierePremiere_purchases): void {
    this.assignTotalPurchase(row);
    this.items[row.count - 1] = row;
    this.source.load(this.items);
    this.sendMatierePremiere.emit(this.items);
  }
  assignTotalPurchase(row: MatierePremiere_purchases): void {
    row.quantity = row.pieces * row.hauteur * row.largeur;
    row.total_purchase = row.quantity * row.item.prix_default;
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
    this.items.splice(event.data.count - 1, 1);
    let count = 0;
    for (let item of this.items) {
      item.count = count + 1;
      count++;
    }
    this.sendMatierePremiere.emit(this.items);
  }
}
