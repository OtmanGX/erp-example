import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';
import { Client } from '@TanglassCore/models/ventes/client.model';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
import {
  companiesDirection,
  statusDevisDirection,
  PaiementModeDirection,
  LivraisonModesDirection,
  companiesForDeliveryDirection,
} from '@TanglassCore/enums/ventes.enum';
import {
  Commande,
  ICommande,
} from '@TanglassCore/models/ventes/commande.model';
import { Subscription } from 'rxjs';
import { CommandeMockService } from '@TanglassCore/mock/ventes/commande.mock.service';
import { FormDelivery } from '@TanglassCore/models/ventes/delivery.model';

@Component({
  selector: 'ngx-form-bon-livraison',
  templateUrl: './form-bon-livraison.component.html',
  styleUrls: ['./form-bon-livraison.component.scss'],
})
export class FormBonLivraisonComponent implements OnInit, OnDestroy {
  bonLivraisonForm: FormGroup;
  listClients: Client[] = [];
  listContacts: Contact[] = [];
  adequateCommande$: Subscription;
  listCommandes: ICommande[] = [];
  selectedCommandes: ICommande[] = [];
  listFilteredCommandes: ICommande[] = [];
  companiesOptions: string[];
  paiementModes: string[];
  livraisonModesOptions: string[];
  formValues: FormDelivery = new FormDelivery();

  @Output() sendCommandes = new EventEmitter<ICommande[]>();

  dropSettingsForCommande: IDropdownSettings = {
    idField: 'id',
    textField: 'id',
    allowSearchFilter: true,
    maxHeight: 100,
    closeDropDownOnSelection: true,
  };
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'nom',
    allowSearchFilter: true,
    maxHeight: 100,
    closeDropDownOnSelection: true,
  };
  constructor(
    private readonly clientService: ClientMockService,
    private readonly contactService: ContactMockService,
    private fb: FormBuilder,
    private commandeService: CommandeMockService
  ) {}
  ngOnInit(): void {
    this.companiesOptions = Object.values(companiesDirection);
    this.paiementModes = Object.values(PaiementModeDirection);
    this.livraisonModesOptions = Object.values(LivraisonModesDirection);
    this.buildBonLivraisonForm();
    this.getAllClients();
    this.getAllContacts();
  }
  buildBonLivraisonForm(): void {
    this.bonLivraisonForm = this.fb.group({
      client: [, Validators.required],
      contact: [],
      companie: ['', Validators.required],
      date: [new Date()],
      nature: ['', Validators.required],
      paiementMode: ['', Validators.required],
      status: [statusDevisDirection.Initial],
      commandes: [[], Validators.required],
      isInvoiced: [false, Validators.required],
    });
  }
  getAllClients(): void {
    this.clientService.getAll().subscribe({
      next: (clients) => {
        if (clients) {
          this.listClients = clients;
        }
      },
    });
  }
  getAllContacts(): void {
    this.contactService.getAll().subscribe({
      next: (contacts) => {
        if (contacts) {
          return contacts;
        }
      },
    });
  }
  onSelectClient(item: Client): void {
    var obj = this.listClients.filter(function (e) {
      return e.id == item.id;
    });
    this.bonLivraisonForm.get('client').setValue(obj[0]);
    this.listContacts = this.bonLivraisonForm.controls.client.value.contacts;
    this.getCommandes(obj[0].id);
    this.resetCommandeField();
  }
  onSelectCommande(): void {
    this.selectedCommandes = [];
    let commandesIdsArray = this.bonLivraisonForm.get('commandes').value;
    commandesIdsArray.forEach((element) => {
      var obj = this.listCommandes.filter(function (e) {
        return e.id == element.id;
      });
      this.selectedCommandes.push(obj[0]);
    });

    this.diffuseCommandes();
  }

  onSelectAllCommandes(items): void {
    this.selectedCommandes = [];
    var obj;
    items.forEach((element) => {
      obj = this.listCommandes.filter(function (e) {
        return e.id == element.id;
      });

      this.selectedCommandes.push(obj[0]);
    });
    this.sendCommandes.emit(this.selectedCommandes);
  }
  /**
   *
   *
  onItemDeSelect(item:ICommande){

  let index=this.selectedCommandes.findIndex(element=>element.id===item.id)
  if (index > -1) {
    this.selectedCommandes.splice(index, 1);
 }
 this.diffuseCommandes();
}
*/
  onChoosingCompanie(companie): void {
    this.listFilteredCommandes = this.listCommandes.filter(function (
      e: ICommande
    ) {
      return (
        (e.commandeTanglass.formCommande.companie == companie &&
          e.commandeTanglass.total_HT) ||
        (e.commandeTrimar.formCommande.companie == companie &&
          e.commandeTrimar.total_HT)
      );
    });
    this.resetCommandeField();
  }
  resetCommandeField(): void {
    this.selectedCommandes = [];
    this.sendCommandes.emit(this.selectedCommandes);
    this.bonLivraisonForm.get('commandes').setValue([]);
  }
  ngOnDestroy(): void {
    if (this.adequateCommande$) {
      this.adequateCommande$.unsubscribe();
    }
  }
  diffuseCommandes(): void {
    let companie = this.bonLivraisonForm.get('companie').value;
    let attribute = companiesForDeliveryDirection[companie];
    this.selectedCommandes = this.selectedCommandes.map(
      (commande) => commande[attribute]
    );
    this.sendCommandes.emit(this.selectedCommandes);
  }

  getCommandes(ClientID): void {
    this.adequateCommande$ = this.commandeService
      .findByClient(ClientID)
      .subscribe({
        next: (commandes) => {
          if (commandes) {
            this.listCommandes = commandes;
          }
        },
      });
    let companie = this.bonLivraisonForm.controls.companie.value;
    if (companie) {
      this.onChoosingCompanie(companie);
    }
  }
}
