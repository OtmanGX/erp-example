import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyCardComponent implements OnInit {
  title = "Profile d'utilisateur";
  id: string;
  step = null;
  data: any;
  passedData: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(value => {
      this.id = value.id;
      this.passedData = [
        {label: 'Nom', value: this.data?.name},
        {label: 'CNSS', value: this.data?.CNSS},
        {label: 'ICE', value: this.data?.ICE},
        {label: 'IF', value: this.data?.IF},
        {label: 'RC', value: this.data?.RC},
        {label: 'E-mail', value: this.data?.email},
        {label: 'Téléphone', value: this.data?.phone},
        {label: 'Site web', value: this.data?.website},
      ];
    });
  }

//   export interface DetailedCompanie extends MetaData {
//   id: string;
//   CNSS: string;
//   ICE: string;
//   IF: string;
//   RC: string;
//   address: string;
//   email?: string;
//   name: string;
//   phone: string;
//   website?: string;
// }

  ngOnInit(): void {
  }

}
