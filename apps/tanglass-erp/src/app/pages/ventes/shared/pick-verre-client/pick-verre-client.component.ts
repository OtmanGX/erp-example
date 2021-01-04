import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
} from '@angular/core';
import * as _ from 'lodash';
import { LocalDataSource } from 'ng2-smart-table';
import { VerreClient_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { VerreClient } from '../../../../../../../../libs/core/product/src/lib/models/glasse.model';
import { InputRenderComponent } from '../input-render-component/input-render.component';
import { SelectRenderComponent } from '../for-select-render-component/select-render.component';
import { InputDimensionsRenderComponent } from '../input-render-dimensions/input-render-dimensions.component';
import { VerreClientMockService } from '@TanglassCore/mock/produit/verreClient.mock.service';

@Component({
  selector: 'ngx-pick-verre-client',
  templateUrl: './pick-verre-client.component.html',
  styleUrls: ['./pick-verre-client.component.scss'],
})
export class PickVerreClientComponent implements OnInit {
  @Input() isVerreClient: boolean;
  @Input() disabled: boolean;

  @Output() sendSelectedRows = new EventEmitter<any>();
  @Output() sendVerreClient = new EventEmitter<any>();
  data: VerreClient[];
  items: VerreClient_purchases[] = [];
  selectedRows = [];
  filtrageArgs = ['code'];
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
            data: this.data,
            filtrageArgs: this.filtrageArgs,
            instance: new VerreClient(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: VerreClient_purchases) => {
            this.replaceRow(row);
          });
        },
        width: '130px',
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
          return row.item.epaisseur + ' mm';
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
          instance.emitRow.subscribe((row: VerreClient_purchases) => {
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
        valuePrepareFunction: (cell, row: VerreClient_purchases) => {
          return row.item.code;
        },
      },

      libelle: {
        title: 'Libellé',
        type: 'html',
        valuePrepareFunction: (cell, row: VerreClient_purchases) => {
          return row.item.libelle;
        },
      },
      epaisseur: {
        title: 'Epaisseur',
        type: 'html',
        valuePrepareFunction: (cell, row: VerreClient_purchases) => {
          return row.item.epaisseur;
        },
      },
      pieces: {
        title: 'Quantité',
        type: 'html',
        valuePrepareFunction: (cell, row: VerreClient_purchases) => {
          return row.pieces;
        },
      },

      largeur: {
        title: 'Largeur',
        type: 'html',
        valuePrepareFunction: (cell, row: VerreClient_purchases) => {
          return row.largeur;
        },
      },
      hauteur: {
        title: 'Hauteur',
        type: 'html',
        valuePrepareFunction: (cell, row: VerreClient_purchases) => {
          return row.hauteur;
        },
      },
    },
  };

  ngOnChanges(changes: SimpleChanges) {
    if (!this.disabled) {
      this.getAllVerresClient();
    }
  }
  constructor(private readonly verreClientService: VerreClientMockService) {}

  ngOnInit(): void {
    if (!this.disabled) {
      this.getAllVerresClient();
    }
  }

  addVerreClient() {
    let verreClient = new VerreClient_purchases();
    verreClient.count = this.items.length + 1;
    this.items = [...this.items, ...[verreClient]];
    this.source.load(this.items);
  }

  getAllVerresClient(): void {
    this.verreClientService.getAll().subscribe({
      next: (verreClient) => {
        this.data = verreClient;
      },
    });
  }

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    this.sendSelectedRows.emit(this.selectedRows);
  }

  replaceRow(row: VerreClient_purchases) {
    this.items[row.count - 1] = row;
    this.source.load(this.items);
    this.sendVerreClient.emit(this.items);
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
    this.sendVerreClient.emit(this.items);
  }
}
