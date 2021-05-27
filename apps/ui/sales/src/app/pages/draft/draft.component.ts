import { Component, OnInit } from '@angular/core';
import { DraftFacade } from '@tanglass-erp/store/sales';

@Component({
  selector: 'ngx-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {

  constructor(private facade: DraftFacade) { }

  ngOnInit(): void {
  }

}
