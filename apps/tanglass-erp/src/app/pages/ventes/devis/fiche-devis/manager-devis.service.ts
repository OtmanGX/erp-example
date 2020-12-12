import { Injectable } from '@angular/core';
import { Devis, IDevis } from '@TanglassCore/models/ventes/devis.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerDevisService {
  private devis: Devis;

  constructor() {}

  createDevis(): Devis {
    this.devis = new Devis();
    return this.devis;
  }

  castDevis(devis: IDevis): Devis {
    this.devis = new Devis(devis);
    this.devis.devisTanglass = devis.devisTanglass;
    this.devis.devisTrimar = devis.devisTrimar;
    this.devis.updateAmountsSubjects();
    return this.devis;
  }
}
