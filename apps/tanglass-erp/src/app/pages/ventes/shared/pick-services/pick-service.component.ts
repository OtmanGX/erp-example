import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Services_items } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import {
  MatierePremiere_purchases,
  VerreClient_purchases,
} from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { CoupeComponent } from './components/coupe.component';
import { AluminiumComponent } from './components/aluminium.component';
import { BiseautageComponent } from './components/biseautage.component';
import { BombageComponent } from './components/bombage.component';
import { BordPolisComponent } from './components/bord-polis.component';
import { EncocheComponent } from './components/encoche.component';
import { GravageComponent } from './components/gravage.component';
import { PoseComponent } from './components/pose.component';
import { SablageComponent } from './components/sablage.component';
import { TrempageComponent } from './components/trempage.component';
import { TrousComponent } from './components/trous.component';
import { PopWarnComponent } from '../../shared/pop-warn/pop-warn.component';
import { NbDialogService } from '@nebular/theme';
import { ManagerPurchasesService } from '../manager-purchases-service/manager-services.service';

@Component({
  selector: 'ngx-pick-service',
  templateUrl: './pick-service.component.html',
  styleUrls: ['./pick-service.component.scss'],
})
export class PickServiceComponent implements OnInit, OnChanges {
  items: Services_items = new Services_items();
  @Input() selectedMatierePremiere: MatierePremiere_purchases[];
  @Input() selectedVerreClient: VerreClient_purchases[];
  @Input() disabled: boolean = false;

  @Output() sendServices = new EventEmitter<any>();
  constructor(
    private readonly dialogService: NbDialogService,
    private readonly managerServicesService: ManagerPurchasesService
  ) {}
  @ViewChild(CoupeComponent) coupe: CoupeComponent;
  @ViewChild(AluminiumComponent) aluminium: AluminiumComponent;
  @ViewChild(BiseautageComponent) biseautage: BiseautageComponent;
  @ViewChild(BombageComponent) bombage: BombageComponent;
  @ViewChild(BordPolisComponent) bordPolis: BordPolisComponent;
  @ViewChild(EncocheComponent) encoche: EncocheComponent;
  @ViewChild(GravageComponent) gravage: GravageComponent;
  @ViewChild(PoseComponent) pose: PoseComponent;
  @ViewChild(SablageComponent) sablage: SablageComponent;
  @ViewChild(TrempageComponent) trempage: TrempageComponent;
  @ViewChild(TrousComponent) trous: TrousComponent;

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    for (let service of Object.keys(this.items)) {
      if (this.items[service].length) {
        this[service].disabled = this.disabled;
      }
    }
  }

  validateMatieresPremieres() {
    let errorMsg: string = '';
    if (!this.selectedMatierePremiere[0] && !this.selectedVerreClient[0]) {
      errorMsg = `Il faut d'abord sélectionner le verre !`;
      this.PopupWarn(errorMsg);
      return !errorMsg;
    } else {
      if (this.selectedMatierePremiere[0]) {
        errorMsg = this.managerServicesService.inValideList(
          this.selectedMatierePremiere
        );
        if (errorMsg) {
          this.PopupWarn(errorMsg);
          return !errorMsg;
        }
      }
      if (this.selectedVerreClient[0]) {
        errorMsg = this.managerServicesService.inValideList(
          this.selectedVerreClient
        );
        if (errorMsg) {
          this.PopupWarn(errorMsg);
          return !errorMsg;
        }
      }
    }
    return !errorMsg;
  }

  assignItems(event, property: string) {
    this.items[property] = event;
    this.sendServices.emit(this.items);
  }
  //method for extra initialization of childs !this method is called from parent  devis Component
  loadServicesTables() {
    for (let service of Object.keys(this.items)) {
      if (this.items[service].length) {
        this[service].disabled = this.disabled;
        this[service].items = this.items[service];
        this[service].source.load(this.items[service]);
      }
    }
  }
  addCoupe(): void {
    if (this.validateMatieresPremieres()) {
      this.coupe.addCoupe(this.selectedMatierePremiere);
      this.coupe.addCoupe(this.selectedVerreClient);
    }
  }

  addBordPolis(): void {
    if (this.validateMatieresPremieres()) {
      this.bordPolis.addBordPolis(this.selectedMatierePremiere);
      this.bordPolis.addBordPolis(this.selectedVerreClient);
    }
  }

  addTrous(): void {
    if (this.validateMatieresPremieres()) {
      this.trous.addTrous(this.selectedMatierePremiere);
      this.trous.addTrous(this.selectedVerreClient);
    }
  }
  addBiseautage(): void {
    if (this.validateMatieresPremieres()) {
      this.biseautage.addBiseautage(this.selectedMatierePremiere);
      this.biseautage.addBiseautage(this.selectedVerreClient);
    }
  }
  addEncoche(): void {
    if (this.validateMatieresPremieres()) {
      this.encoche.addEncoche(this.selectedMatierePremiere);
      this.encoche.addEncoche(this.selectedVerreClient);
    }
  }
  addTrempage(): void {
    if (this.validateMatieresPremieres()) {
      this.trempage.addTrempage(this.selectedMatierePremiere);
      this.trempage.addTrempage(this.selectedVerreClient);
    }
  }

  addBombage(): void {
    if (this.validateMatieresPremieres()) {
      this.bombage.addBombage(this.selectedMatierePremiere);
      this.bombage.addBombage(this.selectedVerreClient);
    }
  }

  addGravage(): void {
    if (this.validateMatieresPremieres()) {
      this.gravage.addGravage(this.selectedMatierePremiere);
      this.gravage.addGravage(this.selectedVerreClient);
    }
  }

  addAluminium(): void {
    if (this.validateMatieresPremieres()) {
      this.aluminium.addAluminium(this.selectedMatierePremiere);
      this.aluminium.addAluminium(this.selectedVerreClient);
    }
  }
  addPose(): void {
    if (this.validateMatieresPremieres()) {
      this.pose.addPose(this.selectedMatierePremiere);
      this.pose.addPose(this.selectedVerreClient);
    }
  }
  addSablage(): void {
    if (this.validateMatieresPremieres()) {
      this.sablage.addSablage(this.selectedMatierePremiere);
      this.sablage.addSablage(this.selectedVerreClient);
    }
  }

  PopupWarn(errorMsg: string) {
    this.dialogService.open(PopWarnComponent, {
      context: {
        title: errorMsg,
      },
      closeOnBackdropClick: false,
    });
  }
}
