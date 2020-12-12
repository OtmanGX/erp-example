import { Injectable } from '@angular/core';
import { MatierePremiere_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerPurchasesService {
  constructor() {}

  inValideList(listToValidate) {
    if (!listToValidate[0]) {
      return `Il faut d'abord sélectionner le verre !`;
    } else {
      for (let element of listToValidate) {
        if (!element.item.code) {
          return `Vérifier que le code est inséré dans la ligne  ${element.count} !`;
        }

        if (!element.pieces) {
          return `Vérifier que la quantité  du  ${element.item.code} est insérée`;
        }
        if (!element.largeur) {
          return `Vérifier que la  Largeur  du  ${element.item.code} est insérée`;
        }
        if (!element.hauteur) {
          return `Vérifier que  la Hauteur du  ${element.item.code} est insérée`;
        }
      }
    }
    return;
  }
}
