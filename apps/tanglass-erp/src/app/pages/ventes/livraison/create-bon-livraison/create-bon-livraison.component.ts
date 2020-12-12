import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatierePremiere_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { Accessoire_purchases } from '@TanglassCore/models/ventes/customerPurchases/accessoire_purchases.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Service_purchases } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import { Consommable_purchases } from '@TanglassCore/models/ventes/customerPurchases/consommable_purchases.model';
import { SystemApparent_purchases } from '@TanglassCore/models/ventes/customerPurchases/systemApparent_purchases.model';
import { ICommande } from '@TanglassCore/models/ventes/commande.model';
import { Delivery } from '@TanglassCore/models/ventes/delivery.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DeliveryMockService } from '@TanglassCore/mock/ventes/delivery.mock.service';
import { FormBonLivraisonComponent } from './form-bon-livraison/form-bon-livraison.component';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-create-bon-livraison',
  templateUrl: './create-bon-livraison.component.html',
  styleUrls: ['./create-bon-livraison.component.scss'],
})
export class CreateBonLivraisonComponent implements OnInit {
  @ViewChild(FormBonLivraisonComponent) form: FormBonLivraisonComponent;

  id: number;
  delivery: Delivery;
  dataMatPremieres: MatierePremiere_purchases[] = [];
  dataServices: Service_purchases[] = [];
  dataAccessoires: Accessoire_purchases[] = [];
  dataConsommables: Consommable_purchases[] = [];
  dataSystemApparent: SystemApparent_purchases[] = [];
  total_HT: Observable<number>;
  tva: Observable<number>;
  total_TTC: Observable<number>;
  constructor(
    private route: ActivatedRoute,
    private deliveryService: DeliveryMockService,
    private readonly toastrService: NbToastrService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.delivery = new Delivery();
    }
    this.total_HT = this.delivery.montant_HT.pipe(debounceTime(500));
    this.tva = this.delivery.montant_TVA.pipe(debounceTime(500));
    this.total_TTC = this.delivery.montant_TTC.pipe(debounceTime(500));
  }

  confirm() {
    this.delivery.formDelivery = this.form.bonLivraisonForm.value;
    this.deliveryService.addNewOne(this.delivery).subscribe({
      next: (savedDelivery) => this.onSave(savedDelivery.id),
    });
  }
  onSave(id) {
    this.showToast('Bon de livraison Enregistré', 'top-right', 'success');
    console.log(this.delivery);
    this.router.navigateByUrl('/livraison/list');
  }
  showToast(msg, position, status) {
    this.toastrService.show(status || 'Success', `${msg}`, {
      position,
      status,
    });
  }
  getCommandes(event: ICommande[]): void {
    this.dataMatPremieres = [];
    this.dataAccessoires = [];
    this.dataSystemApparent = [];
    this.dataServices = [];
    this.dataConsommables = [];
    this.dataSystemApparent = [];
    event.forEach((element) => {
      this.dataMatPremieres = [
        ...this.dataMatPremieres,
        ...element.itemsMatierePremieres,
      ];
      this.dataAccessoires = [
        ...this.dataAccessoires,
        ...element.itemsAccessoires,
      ];
      this.dataSystemApparent = [
        ...this.dataSystemApparent,
        ...element.itemsSystemApparent,
      ];
      // Merging  services to one Array
      var arr = Object.values(element.itemsServices).reduce(function (a, b) {
        return a.concat(b);
      });
      this.dataServices = this.dataServices.concat(arr);
      // Merging  consommables to one Array

      var arr = Object.values(element.itemsConsommables).reduce(function (
        a,
        b
      ) {
        return a.concat(b);
      });
      this.dataConsommables = this.dataConsommables.concat(arr);
    });
  }
  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  onDropMatPremiere(event: CdkDragDrop<string[]>): void {
    this.drop(event);
    this.delivery.amountMatPremiere();
  }
  onDropAccessoire(event: CdkDragDrop<string[]>): void {
    this.drop(event);
    this.delivery.amountAccessoires();
  }
  onDropSystemeApparent(event: CdkDragDrop<string[]>): void {
    this.drop(event);
    this.delivery.amountSystemeApparent();
  }
  onDropService(event: CdkDragDrop<string[]>): void {
    this.drop(event);
    this.delivery.amountServices();
  }
  onDropConsommable(event: CdkDragDrop<string[]>): void {
    this.drop(event);
    this.delivery.amountConsommables();
  }
  ngOnDestroy(): void {}
}
