import { Injectable } from '@angular/core';
import {
  Commande,
  ICommande,
} from '@TanglassCore/models/ventes/commande.model';
import { NbToastrService } from '@nebular/theme';
import { CompaniesCommandeDirection } from '@TanglassCore/enums/ventes.enum';
import { CommandeMockService } from '@TanglassCore/mock/ventes/commande.mock.service';
import { Router } from '@angular/router';
import { ConverterOrderShape } from '@TanglassCore/mock/shared/converterOrderShape.mock.service';
import { ProductionOrder } from '@TanglassCore/models/production/productionOrder.model';
import { OrderProductionService } from '@TanglassCore/services/production/orderProduction.service';
import { ordersProduction } from '@TanglassCore/data/production/orderProduction.data';
import { OrderProductionMockService } from '@TanglassCore/mock/production/productionOrder.mock.service';
import { AccessoireOrder } from '@TanglassCore/models/inventory/accessoireOrders.model';
import { AccessoireOrdersMockService } from '@TanglassCore/mock/inventory/accessoiresOrder.mock';
import { accessoireOrders } from '@TanglassCore/data/inventory/accessoireOrders.data';
import * as lodash from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class ManagerCommandesService {
  private commande: Commande;
  private CompaniesCommandeDirection: CompaniesCommandeDirection;
  objectCommande: ICommande;

  private id: number;
  constructor(
    private readonly router: Router,
    private readonly commandeService: CommandeMockService,
    private readonly toastrService: NbToastrService,
    private readonly orderForProductionService: OrderProductionMockService,
    private readonly orderForAccessoireService: AccessoireOrdersMockService
  ) {}

  createCommande(): Commande {
    this.commande = new Commande();
    return this.commande;
  }
  getCommande(id: number): Commande {
    this.id = id;
    this.commandeService.getOneById(id).subscribe({
      next: (commande: Commande) => (this.objectCommande = commande),
    });
    this.commande = new Commande(this.objectCommande);
    this.commande.commandeTanglass = {
      ...new ICommande(),
      ...this.objectCommande.commandeTanglass,
    };
    this.commande.commandeTrimar = {
      ...new ICommande(),
      ...this.objectCommande.commandeTrimar,
    };
    this.commande.updateAmountsSubjects();
    this.commande.updateTableAmounts();
    return this.commande;
  }
  onSubmit(): void {
    var keys = [
      ...Object.keys(new ICommande()),
      CompaniesCommandeDirection.commandeTanglass,
      CompaniesCommandeDirection.commandeTrimar,
    ];
    let createdCommande = lodash.pick(this.commande, keys);
    if (!this.id) {
      this.commandeService.addNewOne(createdCommande).subscribe({
        next: (createdOne) => this.onSave(createdOne.id),
      });
      //instruction just in developement step
    }
  }
  saveUpdate(): void {
    if (this.commande) {
      this.commandeService.updateOne(this.commande).subscribe({
        next: () => this.onUpdate(),
      });
    }
  }
  onUpdate() {
    this.showToast('Commande Mise à Jour', 'top-right', 'success');
    this.router.navigateByUrl('/commandes/list');
  }
  onSave(id) {
    this.showToast('Commande Enregistré', 'top-right', 'success');
    this.router.navigateByUrl('/commandes/fiche/' + id);
  }

  showToast(msg, position, status) {
    this.toastrService.show(status || 'Success', `${msg}`, {
      position,
      status,
    });
  }

  adaptDataToProduction() {
    let dataConverter = new ConverterOrderShape(this.objectCommande);
    const orderForProduction = dataConverter.convertToProductionForm();
    this.orderForProductionService.addNewOne(orderForProduction).subscribe({
      next: (order) => this.onLaunching(order.id),
    });
  }
  onLaunching(id) {
    this.showToast('Order de fabrication Enregistré ', 'top-right', 'success');
    this.router.navigateByUrl('/production/detail/' + id);
  }
  orderingAccessoires() {
    let accessoireOrder: AccessoireOrder = new AccessoireOrder(
      this.objectCommande
    );
    this.orderForAccessoireService.addNewOne(accessoireOrder).subscribe({
      next: (order) => this.onAccessoireOrder(order.id),
    });
  }
  onAccessoireOrder(id) {
    this.showToast("Order d'accessoire Enregistré ", 'top-right', 'success');
    this.router.navigateByUrl('/accessoires/accessoireOrders/detail/' + id);
  }
}
