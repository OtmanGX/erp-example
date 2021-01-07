import { Component, OnInit } from '@angular/core';
import { DetailedSalePoint, SalePoint } from '@tanglass-erp/core/management';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './sale-point-card.component.html',
  styleUrls: ['./sale-point-card.component.scss']
})
export class SalePointCardComponent implements OnInit {
  title = "Point de vente";
  gap = "50px";
  id: string;
  step = null;
  data: any;
  passedData: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(value => {
      this.id = value.id;
      this.passedData = [
        {label: 'Nom', value: this.data?.name},
        {label: 'Adresse', value: this.data?.address},
        {label: 'E-mail', value: this.data?.email},
        {label: 'Téléphone', value: this.data?.phone},
        {label: 'Les profiles d\'utilisateurs', value: ''},
      ];
    });
  }

  ngOnInit(): void {
  }

  // Steps

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
