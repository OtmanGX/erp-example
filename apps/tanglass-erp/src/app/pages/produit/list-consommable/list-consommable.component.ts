import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-list-consommable",
  templateUrl: "./list-consommable.component.html",
  styleUrls: ["./list-consommable.component.scss"],
})
export class ListConsommableComponent implements OnInit {
  componentToShow:string;
  constructor(

  ) {}
  listConsommables= [
    {code:"B A",title:"Baguette"},
    {code:'F I',title:"Film Stadip"},
    {code:'L A',title:"Pièces"},
    {code:'T I',title:"Tube Inox"},
    {code:'P',title:"Peinture"},
    {code:'U C',title:"Uchannel"},
  ];
  ngOnInit(): void {}


}
