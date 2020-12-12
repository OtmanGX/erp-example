import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
  commandes=[]
  constructor(
  ) { }

  ngOnInit(): void {

  }

}
