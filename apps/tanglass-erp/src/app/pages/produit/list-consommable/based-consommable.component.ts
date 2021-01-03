import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { BaseMockService } from '@TanglassCore/mock/shared/base.mock.service';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { Subscription } from 'rxjs';
import { Consumable } from '@TanglassCore/models/produit/consommable.model';
import { commandes } from '@TanglassCore/data/ventes/commande.data';
@Component({
  selector: 'ngx-based-consommable',
  templateUrl: './based-consommable.component.html',
  styleUrls: ['./based-consommable.component.scss'],
})
export class BasedConsommableComponent<T extends Consumable>
  implements OnInit, OnDestroy {
  title: string = '';
  consommableCollection: T[] = [];
  selectedCompanies = [];
  isDisabledDrop: boolean = false;
  dropdownSettings: IDropdownSettings = {
    maxHeight: 100,
  };
  listCompanies = Object.values(companiesDirection);
  source: LocalDataSource = new LocalDataSource();
  add_caracteristics(): void {}
  settings: {};
  collectionSubscription: Subscription;
  constructor(
    public dialogService: NbDialogService,
    private readonly baseService: BaseMockService<T>
  ) {}

  ngOnInit(): void {
    this.collectionSubscription = this.baseService.getAll().subscribe({
      next: (collection) =>
        (this.consommableCollection = collection) &&
        this.source.load(this.consommableCollection),
    });
    if (this.consommableCollection[0]) {
      this.selectedCompanies = this.consommableCollection[0].companie;
      this.isDisabledDrop = true;
    }
  }

  ngOnDestroy(): void {
    this.collectionSubscription.unsubscribe();
  }

  addItem(newElement: T): void {
    console.log(this.selectedCompanies);
    let companies = this.selectedCompanies.map((companie) => {
      if (companie.text) return companie.text;
      else return companie;
    });
    this.isDisabledDrop = true;
    if (newElement) {
      newElement = { ...newElement, ...{ companie: companies } };
      this.consommableCollection.push(newElement);
      this.source.load(this.consommableCollection);
      console.log(newElement);
    }
  }
  onSave(): void {
    console.log(this.consommableCollection);
    /**this.baseService.addMany(this.consommableCollection).subscribe({
    next: () => console.log(this.consommableCollection),
  });
  */
  }
}
