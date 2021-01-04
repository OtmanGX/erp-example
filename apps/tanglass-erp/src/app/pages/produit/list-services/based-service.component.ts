import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { BaseMockService } from '@TanglassCore/mock/shared/base.mock.service';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { Service } from '../../../../../../../libs/core/product/src/lib/models/service.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'ngx-based-service',
  templateUrl: './based-service.component.html',
  styleUrls: ['./based-service.component.scss'],
})
export class BasedServiceComponent<T extends Service>
  implements OnInit, OnDestroy {
  title: string = '';
  serviceCollection: T[] = [];
  selectedCompanies: string[] = [];
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
        (this.serviceCollection = collection) &&
        this.source.load(this.serviceCollection),
    });
  }

  ngOnDestroy(): void {
    this.collectionSubscription.unsubscribe();
  }
  onSelectCompanie(companie): void {
    this.selectedCompanies.push(companie.text);
  }
  onSelectAllCompanies(companies): void {
    companies = companies.map((companie) => {
      return companie.text;
    });
    this.selectedCompanies = companies;
  }

  addItem(newElement: T): void {
    if (newElement) {
      newElement = { ...newElement, ...{ companie: this.selectedCompanies } };
      this.serviceCollection.push(newElement);
      this.source.load(this.serviceCollection);
      console.log(newElement);
    }
  }
  onSave(): void {}
}
