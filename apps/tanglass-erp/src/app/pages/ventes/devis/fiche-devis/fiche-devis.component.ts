import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Devis, IDevis } from '@TanglassCore/models/ventes/devis.model';
import { MatierePremiere_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { ManagerDevisService } from './manager-devis.service';
import { Observable } from 'rxjs';
import { Accessoire_purchases } from '@TanglassCore/models/ventes/customerPurchases/accessoire_purchases.model';
import { debounceTime } from 'rxjs/operators';
import { Services_items } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import { FormDevisComponent } from './form-devis/form-devis.component';
import { Consommable_items } from '@TanglassCore/models/ventes/customerPurchases/consommable_purchases.model';
import { VerreClient_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { PickVerreClientComponent } from '../../shared/pick-verre-client/pick-verre-client.component';
import { DevisMockService } from '@TanglassCore/mock/ventes/devis.mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PickMatierePremiereComponent } from '../../shared/pick-matierePremiere/pick-matierePremiere.component';
import { PickServiceComponent } from '../../shared/pick-services/pick-service.component';
import { PickConsommablesComponent } from '../../shared/pick-consommables/pick-consommables.component';
import { PickAccessoiresComponent } from '../../shared/pick-accessoires/pick-accessoires.component';
import { PickSystemApparentComponent } from '../../shared/pick-system-apparent/pick-system-apparent.component';
import { NbToastrService } from '@nebular/theme';
import { CommandeMockService } from '@TanglassCore/mock/ventes/commande.mock.service';
import {
  Commande,
  ICommande,
} from '@TanglassCore/models/ventes/commande.model';
import { statusCommandeDirection } from '@TanglassCore/enums/ventes.enum';
import * as lodash from 'lodash';
@Component({
  selector: 'ngx-fiche-devis',
  templateUrl: './fiche-devis.component.html',
  styleUrls: ['./fiche-devis.component.scss'],
})
export class FicheDevisComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(FormDevisComponent) form: FormDevisComponent;
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
  devis: Devis;
  disabled: boolean = false;
  selectedMatierePremiere: MatierePremiere_purchases[] = [];
  selectedVerreClient: VerreClient_purchases[] = [];
  total_HT: Observable<number>;
  tva: Observable<number>;
  total_TTC: Observable<number>;
  isVerreClient: boolean = false;
  submitted: boolean = false;
  updateMode: boolean = false;
  constructor(
    private readonly managerDevisService: ManagerDevisService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly devisService: DevisMockService,
    private readonly commandeService: CommandeMockService,
    private toastrService: NbToastrService
  ) {}
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getDevis(this.id);
      this.disabled = true;
    } else {
      this.devis = this.managerDevisService.createDevis();
    }
    this.total_HT = this.devis.montant_HT.pipe(debounceTime(500));
    this.tva = this.devis.montant_TVA.pipe(debounceTime(500));
    this.total_TTC = this.devis.montant_TTC.pipe(debounceTime(500));
  }
  getDevis(id: number) {
    this.devisService.getOneById(id).subscribe({
      next: (devis: IDevis) => {
        this.devis = this.managerDevisService.castDevis(devis);
      },
    });
  }
  ngAfterViewInit(): void {
    if (this.disabled) {
      setTimeout(() => {
        this.form.formValues = this.devis.formDevis;
        this.pickGlass.items = this.devis.itemsMatierePremieres;
        this.pickAccessoires.items = this.devis.itemsAccessoires;
        this.pickVerreClient.items = this.devis.itemsClients;
        this.PickSystemApparent.items = this.devis.itemsSystemApparent;
        this.pickServices.items = this.devis.itemsServices;
        this.pickConsommables.items = this.devis.itemsConsommables;
        this.pickGlass.source.load(this.devis.itemsMatierePremieres);
        this.pickAccessoires.source.load(this.devis.itemsAccessoires);
        this.pickVerreClient.source.load(this.devis.itemsClients);
        this.PickSystemApparent.source.load(this.devis.itemsSystemApparent);
        this.pickServices.loadServicesTables();
        this.pickConsommables.loadTables();
      });
    }
  }
  ngOnDestroy(): void {}
  enableDevis(): void {
    this.disabled = false;
    this.updateMode = true;
  }
  onSubmit(): void {
    this.devis.formDevis = this.form.devisForm.value;
    var keys = [...Object.keys(new IDevis()), 'devisTanglass', 'devisTrimar'];
    let createdDevis = lodash.pick(this.devis, keys);
    if (!this.id) {
      this.devisService.addNewOne(createdDevis).subscribe({
        next: () => this.onSave(),
      });
    }
    this.submitted = true;
  }

  saveUpdate(): void {
    if (this.devis) {
      this.devisService.updateOne(this.devis).subscribe({
        next: () => this.onUpdate(),
      });
    }
  }
  onUpdate() {
    this.showToast('Devis Mise à Jour', 'top-right', 'success');
    this.router.navigate(['../../', 'list'], { relativeTo: this.route });
  }
  onSave() {
    this.showToast('Devis Enregistré', 'top-right', 'success');
    this.router.navigate(['../', 'list'], { relativeTo: this.route });
  }
  onTransfert(id) {
    this.showToast('Devis Transféré en commande', 'top-right', 'success');
    this.router.navigateByUrl('/commandes/fiche/' + id);
  }
  showToast(msg, position, status) {
    this.toastrService.show(status || 'Success', `${msg}`, {
      position,
      status,
    });
  }
  transfertCommande() {
    // let createdCommande = lodash.pick(this.devis,keys);
    let createdCommande = new Commande(this.devis);
    createdCommande.formCommande = {
      client: this.devis.formDevis.client,
      contact: this.devis.formDevis.contact,
      dateCommande: new Date(),
      delay: null,
      companie: this.devis.formDevis.companie,
      status: statusCommandeDirection.encours,
    };
    createdCommande.commandeTanglass = this.devis.devisTanglass;
    createdCommande.commandeTrimar = this.devis.devisTrimar;
    this.commandeService.addNewOne(createdCommande).subscribe({
      next: (commande: ICommande) => this.onTransfert(commande.id),
    });
  }
  setSelectedMatierePremiere(event: MatierePremiere_purchases[]): void {
    this.selectedMatierePremiere = event;
  }
  setSelectedVerreClient(event: VerreClient_purchases[]): void {
    this.selectedVerreClient = event;
  }
  setMatierePremiere(event: MatierePremiere_purchases[]): void {
    this.devis.itemsMatierePremieres = event;
    this.devis.separateMatierePremiere();
  }
  setServices(event: Services_items): void {
    this.devis.itemsServices = event;
    this.devis.separateServices();
  }
  setAccessoires(event: Accessoire_purchases[]): void {
    this.devis.itemsAccessoires = event;
    this.devis.separateAccessoires();
  }
  setConsommables(event: Consommable_items): void {
    this.devis.itemsConsommables = event;
    this.devis.separateConsommables();
  }
  setVerreClient(event: VerreClient_purchases[]): void {
    this.devis.itemsClients = event;
  }
  setIsVerreClient(event: boolean) {
    this.isVerreClient = event;
  }
  setSystemApparents(event): void {
    this.devis.itemsSystemApparent = event;
    this.devis.separateSystemeApparent();
  }
}
