import {
  MatierePremiere_purchases,
  VerreClient_purchases,
} from './customerPurchases/matiere_premiere_purchases.model';
import { Accessoire_purchases } from './customerPurchases/accessoire_purchases.model';
import { Services_items } from './customerPurchases/service_purchases.model';
import { statusDevisDirection } from '../../enums/ventes.enum';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { Client } from './client.model';
import { Contact } from './contact.model';
import { BehaviorSubject } from 'rxjs';
import { BaseModel } from '../baseModel.model';
import {
  Consommable_purchases,
  Consommable_items,
} from './customerPurchases/consommable_purchases.model';
import { SystemApparent_purchases } from './customerPurchases/systemApparent_purchases.model';
import { Interface } from 'readline';

export class FormDevis {
  client: Client = new Client();
  contact: Contact = new Contact();
  dateDevis: Date = new Date();
  expirationDevis?: Date = new Date();
  companie: string = '';
  status: string = ''; //initial / confirmed :pass to commande
}
export class IDevis {
  id?: number;
  formDevis: FormDevis = new FormDevis();
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

  devisTanglass?: IDevis;

  devisTrimar?: IDevis;
}

export class Devis extends BaseModel implements IDevis {
  id?: number;
  formDevis: FormDevis = new FormDevis();
  itemsMatierePremieres: MatierePremiere_purchases[] = [];
  itemsServices: Services_items = new Services_items();
  itemsAccessoires: Accessoire_purchases[] = [];
  itemsConsommables: Consommable_items = new Consommable_items();
  itemsSystemApparent: SystemApparent_purchases[] = [];
  itemsClients: VerreClient_purchases[] = [];
  total_HT: number = 0;
  tva: number = 0;
  remise?: number = 0;
  total_TTC: number = 0;
  total_Net: number = 0;

  totalMatierePremiereAmount: number = 0;
  totalServicesAmount: number = 0;
  totalAccessoiresAmount: number = 0;
  totalConsommablesAmount: number = 0;
  totalSystemApparentAmount: number = 0;

  devisTanglass?: IDevis = new IDevis();
  devisTrimar?: IDevis = new IDevis();

  creditAmountHT: number = 0;
  creditAmountTVA: number = 0;
  creditAmountTTC: number = 0;

  additionalAmountHT: number = 0;
  additionalAmountTVA: number = 0;
  additionalAmountTTC: number = 0;

  constructor(payload: Partial<Devis> = new IDevis()) {
    super();
    if (payload) Object.assign(this, payload);
  }

  montant_HT: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TVA: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TTC: BehaviorSubject<number> = new BehaviorSubject(0);

  updateTanglassAmount() {
    this.devisTanglass.creditAmountHT =
      this.devisTanglass.totalMatierePremiereAmount +
      this.devisTanglass.totalServicesAmount +
      this.devisTanglass.totalConsommablesAmount;

    this.devisTanglass.additionalAmountHT =
      this.devisTanglass.totalAccessoiresAmount +
      this.devisTanglass.totalSystemApparentAmount;

    this.devisTanglass.total_HT =
      this.devisTanglass.creditAmountHT + this.devisTanglass.additionalAmountHT;
    this.devisTanglass.tva = 0.2 * this.devisTanglass.total_HT;
    this.devisTanglass.total_TTC =
      this.devisTanglass.total_HT + this.devisTanglass.tva;
    this.updateTotalAmount();
  }
  updateTrimarAmount() {
    this.devisTrimar.creditAmountHT =
      this.devisTrimar.totalMatierePremiereAmount +
      this.devisTrimar.totalServicesAmount +
      this.devisTrimar.totalConsommablesAmount;

    this.devisTrimar.additionalAmountHT =
      this.devisTrimar.totalAccessoiresAmount +
      this.devisTrimar.totalSystemApparentAmount;
    this.devisTrimar.total_HT =
      this.devisTrimar.creditAmountHT + this.devisTrimar.additionalAmountHT;
    this.devisTrimar.tva = 0.2 * this.devisTrimar.total_HT;
    this.devisTrimar.total_TTC =
      this.devisTrimar.total_HT + this.devisTrimar.tva;
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    this.creditAmountHT =
      this.devisTanglass.creditAmountHT + this.devisTrimar.creditAmountHT;
    this.creditAmountTVA = 0.2 * this.creditAmountHT;
    this.creditAmountTTC = this.creditAmountHT + this.creditAmountTVA;

    this.additionalAmountHT =
      this.devisTanglass.additionalAmountHT +
      this.devisTrimar.additionalAmountHT;
    this.additionalAmountTVA = 0.2 * this.additionalAmountHT;
    this.additionalAmountTTC =
      this.additionalAmountHT + this.additionalAmountTVA;

    this.total_HT = this.devisTanglass.total_HT + this.devisTrimar.total_HT;
    this.tva = 0.2 * this.total_HT;
    this.total_TTC = this.total_HT + this.tva;

    this.updateAmountsSubjects();
  }

  updateAmountsSubjects() {
    this.montant_HT.next(this.total_HT);
    this.montant_TVA.next(this.tva);
    this.montant_TTC.next(this.total_TTC);
  }

  separateMatierePremiere() {
    this.devisTanglass.itemsMatierePremieres = this.itemsMatierePremieres.filter(
      (item) => item.companie === companiesDirection.Tanglass
    );
    this.devisTanglass.totalMatierePremiereAmount = this.devisTanglass.itemsMatierePremieres.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );

    this.devisTrimar.itemsMatierePremieres = this.itemsMatierePremieres.filter(
      (item) => item.companie === companiesDirection.Trimar
    );
    this.devisTrimar.totalMatierePremiereAmount = this.devisTrimar.itemsMatierePremieres.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );

    this.totalMatierePremiereAmount =
      this.devisTanglass.totalMatierePremiereAmount +
      this.devisTrimar.totalMatierePremiereAmount;

    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }

  separateServices() {
    this.devisTanglass.totalServicesAmount = 0;
    this.devisTrimar.totalServicesAmount = 0;
    for (let service in this.itemsServices) {
      this.devisTanglass.itemsServices[service] = this.itemsServices[
        service
      ].filter((item) => item.companie === companiesDirection.Tanglass);
      this.devisTrimar.itemsServices[service] = this.itemsServices[
        service
      ].filter((item) => item.companie === companiesDirection.Trimar);

      this.devisTanglass.totalServicesAmount += this.devisTanglass.itemsServices[
        service
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);

      this.devisTrimar.totalServicesAmount += this.devisTrimar.itemsServices[
        service
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);
    }

    this.totalServicesAmount =
      this.devisTanglass.totalServicesAmount +
      this.devisTrimar.totalServicesAmount;

    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }

  separateAccessoires() {
    this.devisTanglass.itemsAccessoires = this.itemsAccessoires.filter(
      (item) => item.companie === companiesDirection.Tanglass
    );
    this.devisTanglass.totalAccessoiresAmount = this.devisTanglass.itemsAccessoires.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    console.log(this.devisTanglass.itemsAccessoires);
    console.log(this.devisTanglass.totalAccessoiresAmount);
    this.devisTrimar.itemsAccessoires = this.itemsAccessoires.filter(
      (item) => item.companie === companiesDirection.Trimar
    );
    this.devisTrimar.totalAccessoiresAmount = this.devisTrimar.itemsAccessoires.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.totalAccessoiresAmount =
      this.devisTanglass.totalAccessoiresAmount +
      this.devisTrimar.totalAccessoiresAmount;
    console.log(this.totalAccessoiresAmount);
    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }

  separateConsommables() {
    this.devisTanglass.totalConsommablesAmount = 0;
    this.devisTrimar.totalConsommablesAmount = 0;
    for (let cons in this.itemsConsommables) {
      this.devisTanglass.itemsServices[cons] = this.itemsConsommables[
        cons
      ].filter((item) => item.companie === companiesDirection.Tanglass);
      this.devisTanglass.totalConsommablesAmount += this.devisTanglass.itemsServices[
        cons
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);
      this.devisTrimar.itemsServices[cons] = this.itemsConsommables[
        cons
      ].filter((item) => item.companie === companiesDirection.Trimar);
      this.devisTrimar.totalConsommablesAmount += this.devisTrimar.itemsServices[
        cons
      ].reduce(function (total, item) {
        return total + item.total_purchase;
      }, 0);
    }
    this.totalConsommablesAmount =
      this.devisTanglass.totalConsommablesAmount +
      this.devisTrimar.totalConsommablesAmount;

    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }

  separateSystemeApparent() {
    this.devisTanglass.itemsSystemApparent = this.itemsSystemApparent.filter(
      (item) => item.companie === companiesDirection.Tanglass
    );
    this.devisTanglass.totalSystemApparentAmount = this.devisTanglass.itemsSystemApparent.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.devisTrimar.itemsSystemApparent = this.itemsSystemApparent.filter(
      (item) => item.companie === companiesDirection.Trimar
    );
    this.devisTrimar.totalSystemApparentAmount = this.devisTrimar.itemsSystemApparent.reduce(
      function (total, item) {
        return total + item.total_purchase;
      },
      0
    );
    this.totalSystemApparentAmount =
      this.devisTanglass.totalSystemApparentAmount +
      this.devisTrimar.totalSystemApparentAmount;

    this.updateTanglassAmount();
    this.updateTrimarAmount();
  }
}
