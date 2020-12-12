import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output,
  OnChanges,
} from '@angular/core';
import { Consommable_items } from '@TanglassCore/models/ventes/customerPurchases/consommable_purchases.model';

import {
  MatierePremiere_purchases,
  VerreClient_purchases,
} from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { NbDialogService } from '@nebular/theme';
import { PopWarnComponent } from '../../shared/pop-warn/pop-warn.component';
import { BaguetteComponent } from './components/baguette.component';
import { ManagerPurchasesService } from '../manager-purchases-service/manager-services.service';
import { FilmComponent } from './components/film.component';
import { PeintureComponent } from './components/peinture.component';
import { PieceComponent } from './components/piece.component';
import { TubeInoxComponent } from './components/tube-inox.component';
import { UchannelComponent } from './components/uchannel.component';

@Component({
  selector: 'ngx-pick-consommables',
  templateUrl: './pick-consommables.component.html',
  styleUrls: ['./pick-consommables.component.scss'],
})
export class PickConsommablesComponent implements OnInit, OnChanges {
  items: Consommable_items = new Consommable_items();
  @Input() selectedMatierePremiere: MatierePremiere_purchases[];
  @Input() selectedVerreClient: VerreClient_purchases[] = [];
  @Output() sendConsommables = new EventEmitter<any>();
  @Input() disabled: boolean;
  glassList;
  constructor(
    private readonly dialogService: NbDialogService,
    private readonly managerServicesService: ManagerPurchasesService
  ) {}
  @ViewChild(BaguetteComponent) baguette: BaguetteComponent;
  @ViewChild(FilmComponent) film: FilmComponent;
  @ViewChild(PieceComponent) piece: PieceComponent;
  @ViewChild(PeintureComponent) peinture: PeintureComponent;
  @ViewChild(TubeInoxComponent) tubeInox: TubeInoxComponent;
  @ViewChild(UchannelComponent) uchannel: UchannelComponent;

  ngOnChanges() {
    this.glassList = this.selectedVerreClient.concat(
      this.selectedMatierePremiere
    );
  }

  ngOnInit(): void {}

  validateMatieresPremieres() {
    let errorMsg: string = '';
    if (!this.glassList[0]) {
      errorMsg = `Il faut d'abord sélectionner le verre !`;
      this.PopupWarn(errorMsg);
      return !errorMsg;
    } else {
      if (this.glassList[0]) {
        errorMsg = this.managerServicesService.inValideList(this.glassList);
        if (errorMsg) {
          this.PopupWarn(errorMsg);
          return !errorMsg;
        }
      }
    }
    return !errorMsg;
  }

  loadTables() {
    for (let cons of Object.keys(this.items)) {
      if (this.items[cons].length) {
        this[cons].disabled = this.disabled;
        this[cons].items = this.items[cons];
        this[cons].source.load(this.items[cons]);
      }
    }
  }
  assignItems(event, property: string) {
    this.items[property] = event;
    this.sendConsommables.emit(this.items);
  }
  addBaguette() {
    if (this.validateMatieresPremieres()) {
      this.baguette.addBaguette(this.glassList);
    }
  }
  addFilm() {
    if (this.validateMatieresPremieres()) {
      this.film.addFilm(this.glassList);
    }
  }
  addPieces() {
    this.glassList[0] && this.validateMatieresPremieres()
      ? this.piece.addPieceToGlass(this.glassList)
      : this.piece.addPiece();
  }
  addPeinture() {
    this.glassList[0] && this.validateMatieresPremieres()
      ? this.peinture.addPeintureToGlass(this.glassList)
      : this.peinture.addPeinture();
  }
  addTube() {
    this.glassList[0] && this.validateMatieresPremieres()
      ? this.tubeInox.addTubeToGlass(this.glassList)
      : this.tubeInox.AddTube();
  }
  addUchannel() {
    this.glassList[0] && this.validateMatieresPremieres()
      ? this.uchannel.addUchannelToGlass(this.glassList)
      : this.uchannel.addUchannel();
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
