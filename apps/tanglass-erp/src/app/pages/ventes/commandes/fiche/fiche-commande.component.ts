import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {
  Commande,
  TableEntry,
  ICommande,
} from '@TanglassCore/models/ventes/commande.model';
import { MatierePremiere_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { ManagerCommandesService } from './manager-commandes.service';
import { Observable, Subject } from 'rxjs';
import { Accessoire_purchases } from '@TanglassCore/models/ventes/customerPurchases/accessoire_purchases.model';
import { debounceTime } from 'rxjs/operators';
import { Services_items } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import { FormCommandeComponent } from './form-commande/form-commande.component';
import { Consommable_items } from '@TanglassCore/models/ventes/customerPurchases/consommable_purchases.model';
import { VerreClient_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { PickVerreClientComponent } from '../../shared/pick-verre-client/pick-verre-client.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { PickMatierePremiereComponent } from '../../shared/pick-matierePremiere/pick-matierePremiere.component';
import { PickServiceComponent } from '../../shared/pick-services/pick-service.component';
import { PickConsommablesComponent } from '../../shared/pick-consommables/pick-consommables.component';
import { PickAccessoiresComponent } from '../../shared/pick-accessoires/pick-accessoires.component';
import { PickSystemApparentComponent } from '../../shared/pick-system-apparent/pick-system-apparent.component';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { ProductionOrder } from '@TanglassCore/models/production/productionOrder.model';

@Component({
  selector: 'ngx-fiche',
  templateUrl: './fiche-commande.component.html',
  styleUrls: ['./fiche-commande.component.scss'],
})
export class FicheCommandeComponent implements OnInit, AfterViewInit {
  @ViewChild(FormCommandeComponent) form: FormCommandeComponent;
  @ViewChild(PickVerreClientComponent)
  pickVerreClient: PickVerreClientComponent;
  @ViewChild(PickMatierePremiereComponent)
  pickGlass: PickMatierePremiereComponent;
  @ViewChild(PickServiceComponent) pickServices: PickServiceComponent;
  @ViewChild(PickConsommablesComponent)
  pickConsommables: PickConsommablesComponent;
  @ViewChild(PickAccessoiresComponent)
  pickAccessoires: PickAccessoiresComponent;
  @ViewChild(PickSystemApparentComponent)
  PickSystemApparent: PickSystemApparentComponent;
  id: number;
  commande: Commande;
  disabled: boolean = false;
  updateMode: boolean = false;
  selectedMatierePremiere: MatierePremiere_purchases[] = [];
  total_HTCredit: Observable<number>;
  tvaCredit: Observable<number>;
  total_TTCCredit: Observable<number>;

  total_HTProvisional: Observable<number>;
  tvaProvisional: Observable<number>;
  total_TTCProvisional: Observable<number>;
  isVerreClient: boolean = false;
  selectedVerreClient: VerreClient_purchases[] = [];
  source: LocalDataSource = new LocalDataSource();
  data: TableEntry[] = [];
  productionOrdre: ProductionOrder;
  constructor(
    private readonly managerCommandesService: ManagerCommandesService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.commande = this.managerCommandesService.getCommande(this.id);
      this.disabled = true;
    } else {
      this.commande = this.managerCommandesService.createCommande();
    }
    this.total_HTCredit = this.commande.montant_HTCredit.pipe(
      debounceTime(500)
    );
    this.tvaCredit = this.commande.montant_TVACredit.pipe(debounceTime(500));
    this.total_TTCCredit = this.commande.montant_TTCCredit.pipe(
      debounceTime(500)
    );

    this.total_HTProvisional = this.commande.montant_HTProvisional.pipe(
      debounceTime(500)
    );
    this.tvaProvisional = this.commande.montant_TVAProvisional.pipe(
      debounceTime(500)
    );
    this.total_TTCProvisional = this.commande.montant_TTCProvisional.pipe(
      debounceTime(500)
    );

    this.data = this.commande.data;
    this.source.load(this.data);
  }
  enableCommande(): void {
    this.disabled = false;
    this.updateMode = true;
  }
  ngAfterViewInit(): void {
    if (this.disabled) {
      setTimeout(() => {
        this.form.formValues = this.commande.formCommande;
        this.form.displayForm();
        this.pickGlass.items = this.commande.itemsMatierePremieres;
        this.pickAccessoires.items = this.commande.itemsAccessoires;
        this.pickVerreClient.items = this.commande.itemsClients;
        this.PickSystemApparent.items = this.commande.itemsSystemApparent;
        this.pickServices.items = this.commande.itemsServices;
        this.pickConsommables.items = this.commande.itemsConsommables;
        this.pickGlass.source.load(this.commande.itemsMatierePremieres);
        this.pickAccessoires.source.load(this.commande.itemsAccessoires);
        this.pickVerreClient.source.load(this.commande.itemsClients);
        this.PickSystemApparent.source.load(this.commande.itemsSystemApparent);
        this.pickServices.loadServicesTables();
        this.pickConsommables.loadTables();
      });
    }
  }
  setSelectedMatierePremiere(event: MatierePremiere_purchases[]): void {
    this.selectedMatierePremiere = event;
  }
  setSelectedVerreClient(event: VerreClient_purchases[]): void {
    this.selectedVerreClient = event;
  }
  setMatierePremiere(event: MatierePremiere_purchases[]): void {
    this.commande.itemsMatierePremieres = event;
    this.commande.separateMatierePremiere();
    this.source.refresh();
  }
  setServices(event: Services_items): void {
    this.commande.itemsServices = event;
    this.commande.separateServices();
    this.source.refresh();
  }
  setAccessoires(event: Accessoire_purchases[]): void {
    this.commande.itemsAccessoires = event;
    this.commande.separateAccessoires();
    this.source.refresh();
  }
  setConsommables(event: Consommable_items): void {
    this.commande.itemsConsommables = event;
    this.commande.separateConsommables();
    this.source.refresh();
  }
  setVerreClient(event: VerreClient_purchases[]): void {
    this.commande.itemsClients = event;
  }
  setIsVerreClient(event: boolean) {
    this.isVerreClient = event;
  }
  setSystemApparents(event): void {
    this.commande.itemsSystemApparent = event;
    this.commande.separateSystemeApparent();
    this.source.refresh();
  }
  onSubmit() {
    console.log('confirmed');
    this.commande.formCommande = this.form.commandeForm.value;
    this.commande.commandeTanglass.formCommande = {
      ...this.form.commandeForm.value,
      ...{ companie: companiesDirection.Tanglass },
    };
    this.commande.commandeTrimar.formCommande = {
      ...this.form.commandeForm.value,
      ...{ companie: companiesDirection.Trimar },
    };
    this.managerCommandesService.onSubmit();
  }
  saveUpdate() {
    this.managerCommandesService.saveUpdate();
  }
  launching() {
    this.managerCommandesService.adaptDataToProduction();
  }

  orderAccessoires() {
    this.managerCommandesService.orderingAccessoires();
  }
  settings = {
    hideHeader: false,
    hideSubHeader: true,
    actions: false,
    columns: {
      companie: {
        title: 'Société',
        type: 'string',
      },
      montantHT: {
        title: 'Total HT',
        type: 'string',
      },
      montantTVA: {
        title: 'Total TVA',
        type: 'string',
      },
      montantTTC: {
        title: 'Total TTC',
        type: 'string',
      },
    },
  };
}
