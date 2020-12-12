import {
  MatierePremiere_purchases,
  VerreClient_purchases,
} from './customerPurchases/matiere_premiere_purchases.model';
import { Accessoire_purchases } from './customerPurchases/accessoire_purchases.model';
import { Services_items } from './customerPurchases/service_purchases.model';
import { Client } from './client.model';
import { Contact } from './contact.model';
import { BehaviorSubject } from 'rxjs';
import { BaseModel } from '../baseModel.model';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { Consommable_items } from './customerPurchases/consommable_purchases.model';
import { SystemApparent_purchases } from './customerPurchases/systemApparent_purchases.model';
import { Payment } from '../payment/payment.model';

export class FormCommande {
  client: Client = new Client();
  contact: Contact = new Contact();
  dateCommande: Date = new Date();
  delay?: Date = new Date();
  companie: string = '';
  status: string = ''; //Cloture / En Cours
}
export class ICommande {
  id?: number;
  formCommande?: FormCommande = new FormCommande();
  itemsMatierePremieres: MatierePremiere_purchases[] = [];
  itemsClients: VerreClient_purchases[] = [];
  itemsServices: Services_items = new Services_items();
  itemsAccessoires: Accessoire_purchases[] = [];
  itemsConsommables: Consommable_items = new Consommable_items();
  itemsSystemApparent: SystemApparent_purchases[] = [];

  totalMatierePremiereAmount: number = 0;
  totalServicesAmount: number = 0;
  totalAccessoiresAmount: number = 0;
  totalConsommablesAmount: number = 0;
  totalSystemApparentAmount: number = 0;

  total_HT: number = 0;
  tva: number = 0;
  remise?: number = 0;
  total_TTC: number = 0;
  total_Net: number = 0;
  creditAmountHT: number = 0;
  creditAmountTVA: number = 0;
  creditAmountTTC: number = 0;

  additionalAmountHT: number = 0;
  additionalAmountTVA: number = 0;
  additionalAmountTTC: number = 0;

  payments?: Payment[];
  reste?: number;

  commandeTanglass?: ICommande;
  commandeTrimar?: ICommande;
  // nestedCommandes:ICommande[];
}

export interface TableEntry {
  companie: string;
  montantHT: number;
  montantTVA: number;
  montantTTC: number;
}

export class Commande extends BaseModel implements ICommande {
  id?: number;
  formCommande: FormCommande = new FormCommande();
  itemsMatierePremieres: MatierePremiere_purchases[] = [];
  itemsClients: VerreClient_purchases[] = [];
  itemsServices: Services_items = new Services_items();
  itemsAccessoires: Accessoire_purchases[] = [];
  itemsConsommables: Consommable_items = new Consommable_items();
  itemsSystemApparent: SystemApparent_purchases[] = [];
  total_HT: number = 0;
  tva: number = 0;
  total_TTC: number = 0;
  remise: number = 0;
  total_Net: number = 0;

  creditAmountHT: number = 0;
  creditAmountTVA: number = 0;
  creditAmountTTC: number = 0;

  additionalAmountHT: number = 0;
  additionalAmountTVA: number = 0;
  additionalAmountTTC: number = 0;

  totalMatierePremiereAmount: number = 0;
  totalServicesAmount: number = 0;
  totalAccessoiresAmount: number = 0;
  totalConsommablesAmount: number = 0;
  totalSystemApparentAmount: number = 0;

  montant_HTCredit: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TVACredit: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TTCCredit: BehaviorSubject<number> = new BehaviorSubject(0);

  montant_HTProvisional: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TVAProvisional: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TTCProvisional: BehaviorSubject<number> = new BehaviorSubject(0);

  payments?: Payment[];
  reste?: number;

  commandeTanglass: ICommande = new ICommande();
  commandeTrimar: ICommande = new ICommande();
  // nestedCommandes:ICommande[];

  // commandes separation between companies

  constructor(payload: Partial<Commande> = new ICommande()) {
    super();
    if (payload) Object.assign(this, payload);
  }
  commandeToTanglass(commande: ICommande) {
    this.commandeTanglass = commande;
  }

  separateMatierePremiere() {
    this.commandeTanglass.itemsMatierePremieres = this.itemsMatierePremieres.filter(
      (item) => item.companie === companiesDirection.Tanglass
    );
    this.commandeTanglass.totalMatierePremiereAmount = this.commandeTanglass.itemsMatierePremieres.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );

    this.commandeTrimar.itemsMatierePremieres = this.itemsMatierePremieres.filter(
      (item) => item.companie === companiesDirection.Trimar
    );
    this.commandeTrimar.totalMatierePremiereAmount = this.commandeTrimar.itemsMatierePremieres.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.totalMatierePremiereAmount =
      this.commandeTanglass.totalMatierePremiereAmount +
      this.commandeTrimar.totalMatierePremiereAmount;
    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }
  separateServices() {
    this.commandeTanglass.totalServicesAmount = 0;
    this.commandeTrimar.totalServicesAmount = 0;
    for (let service in this.itemsServices) {
      this.commandeTanglass.itemsServices[service] = this.itemsServices[
        service
      ].filter((item) => item.companie === companiesDirection.Tanglass);
      this.commandeTanglass.totalServicesAmount += this.commandeTanglass.itemsServices[
        service
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);
      this.commandeTrimar.itemsServices[service] = this.itemsServices[
        service
      ].filter((item) => item.companie === companiesDirection.Trimar);
      this.commandeTrimar.totalServicesAmount += this.commandeTrimar.itemsServices[
        service
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);
    }
    this.totalServicesAmount =
      this.commandeTanglass.totalServicesAmount +
      this.commandeTrimar.totalServicesAmount;
    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }
  separateAccessoires() {
    this.commandeTanglass.itemsAccessoires = this.itemsAccessoires.filter(
      (item) => item.companie === companiesDirection.Tanglass
    );
    this.commandeTanglass.totalAccessoiresAmount = this.commandeTanglass.itemsAccessoires.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.commandeTrimar.itemsAccessoires = this.itemsAccessoires.filter(
      (item) => item.companie === companiesDirection.Trimar
    );
    this.commandeTrimar.totalAccessoiresAmount = this.commandeTrimar.itemsAccessoires.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.totalAccessoiresAmount =
      this.commandeTanglass.totalAccessoiresAmount +
      this.commandeTrimar.totalAccessoiresAmount;
    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }
  separateConsommables() {
    this.commandeTanglass.totalConsommablesAmount = 0;
    this.commandeTrimar.totalConsommablesAmount = 0;
    for (let cons in this.itemsConsommables) {
      this.commandeTanglass.itemsServices[cons] = this.itemsConsommables[
        cons
      ].filter((item) => item.companie === companiesDirection.Tanglass);
      this.commandeTanglass.totalConsommablesAmount += this.commandeTanglass.itemsServices[
        cons
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);
      this.commandeTrimar.itemsServices[cons] = this.itemsConsommables[
        cons
      ].filter((item) => item.companie === companiesDirection.Trimar);
      this.commandeTrimar.totalConsommablesAmount += this.commandeTrimar.itemsServices[
        cons
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);
    }
    this.totalConsommablesAmount =
      this.commandeTanglass.totalConsommablesAmount +
      this.commandeTrimar.totalConsommablesAmount;
    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }
  separateSystemeApparent() {
    this.commandeTanglass.itemsSystemApparent = this.itemsSystemApparent.filter(
      (item) => item.companie === companiesDirection.Tanglass
    );
    this.commandeTanglass.totalSystemApparentAmount = this.commandeTanglass.itemsSystemApparent.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.commandeTrimar.itemsSystemApparent = this.itemsSystemApparent.filter(
      (item) => item.companie === companiesDirection.Trimar
    );
    this.commandeTrimar.totalSystemApparentAmount = this.commandeTrimar.itemsSystemApparent.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.totalSystemApparentAmount =
      this.commandeTanglass.totalSystemApparentAmount +
      this.commandeTrimar.totalSystemApparentAmount;
    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }

  updateTanglassAmount() {
    this.commandeTanglass.creditAmountHT =
      this.commandeTanglass.totalMatierePremiereAmount +
      this.commandeTanglass.totalServicesAmount +
      this.commandeTanglass.totalConsommablesAmount;

    this.commandeTanglass.additionalAmountHT =
      this.commandeTanglass.totalAccessoiresAmount +
      this.commandeTanglass.totalSystemApparentAmount;

    this.commandeTanglass.total_HT =
      this.commandeTanglass.creditAmountHT +
      this.commandeTanglass.additionalAmountHT;
    this.commandeTanglass.tva = 0.2 * this.commandeTanglass.total_HT;
    this.commandeTanglass.total_TTC =
      this.commandeTanglass.total_HT + this.commandeTanglass.tva;
    this.updateTotalAmount();
    this.updateTableForTanglass();
  }
  updateTableForTanglass() {
    this.data[0].montantHT = this.commandeTanglass.total_HT;
    this.data[0].montantTVA = this.commandeTanglass.tva;
    this.data[0].montantTTC = this.commandeTanglass.total_TTC;
  }
  updateTrimarAmount() {
    this.commandeTrimar.creditAmountHT =
      this.commandeTrimar.totalMatierePremiereAmount +
      this.commandeTrimar.totalServicesAmount +
      this.commandeTrimar.totalConsommablesAmount;

    this.commandeTrimar.additionalAmountHT =
      this.commandeTrimar.totalAccessoiresAmount +
      this.commandeTrimar.totalSystemApparentAmount;
    this.commandeTrimar.total_HT =
      this.commandeTrimar.creditAmountHT +
      this.commandeTrimar.additionalAmountHT;
    this.commandeTrimar.tva = 0.2 * this.commandeTrimar.total_HT;
    this.commandeTrimar.total_TTC =
      this.commandeTrimar.total_HT + this.commandeTrimar.tva;
    this.updateTotalAmount();
    this.udateTableForTrimar();
  }
  udateTableForTrimar() {
    this.data[1].montantHT = this.commandeTrimar.total_HT;
    this.data[1].montantTVA = this.commandeTrimar.tva;
    this.data[1].montantTTC = this.commandeTrimar.total_TTC;
  }
  updateTotalAmount() {
    this.creditAmountHT =
      this.commandeTanglass.creditAmountHT + this.commandeTrimar.creditAmountHT;
    this.creditAmountTVA = 0.2 * this.creditAmountHT;
    this.creditAmountTTC = this.creditAmountHT + this.creditAmountTVA;

    this.additionalAmountHT =
      this.commandeTanglass.additionalAmountHT +
      this.commandeTrimar.additionalAmountHT;
    this.additionalAmountTVA = 0.2 * this.additionalAmountHT;
    this.additionalAmountTTC =
      this.additionalAmountHT + this.additionalAmountTVA;

    this.total_HT =
      this.commandeTanglass.total_HT + this.commandeTrimar.total_HT;
    this.tva = 0.2 * this.total_HT;
    this.total_TTC = this.total_HT + this.tva;

    this.updateTableForTotal();
    this.updateAmountsSubjects();
  }
  updateTableForTotal() {
    this.data[2].montantHT = this.total_HT;
    this.data[2].montantTVA = this.tva;
    this.data[2].montantTTC = this.total_TTC;
  }
  updateTableAmounts() {
    this.updateTableForTanglass();
    this.udateTableForTrimar();
    this.updateTableForTotal();
  }
  updateAmountsSubjects() {
    this.montant_HTCredit.next(this.creditAmountHT);
    this.montant_TVACredit.next(this.creditAmountTVA);
    this.montant_TTCCredit.next(this.creditAmountTTC);

    this.montant_HTProvisional.next(this.additionalAmountHT);
    this.montant_TVAProvisional.next(this.additionalAmountTVA);
    this.montant_TTCProvisional.next(this.additionalAmountTTC);
  }
  public data: TableEntry[] = [
    {
      companie: 'Tanglass',
      montantHT: this.commandeTanglass.total_HT,
      montantTVA: this.commandeTanglass.tva,
      montantTTC: this.commandeTanglass.total_TTC,
    },
    {
      companie: 'Trimar',
      montantHT: this.commandeTrimar.total_HT,
      montantTVA: this.commandeTrimar.tva,
      montantTTC: this.commandeTrimar.total_TTC,
    },
    {
      companie: 'Total',
      montantHT: this.total_HT,
      montantTVA: this.tva,
      montantTTC: this.total_TTC,
    },
  ];
}
