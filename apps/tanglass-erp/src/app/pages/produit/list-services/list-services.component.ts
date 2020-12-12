import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-list-services",
  templateUrl: "./list-services.component.html",
  styleUrls: ["./list-services.component.scss"],
})
export class ListServicesComponent implements OnInit {
  componentToShow:string;
  constructor(
  
  ) {}
  listServices= [
    {code:"C O",title:"Coupe"},
    {code:'B P',title:"Bord Polis"},
    {code:'T',title:"Trous"},
    {code:'E S F',title:"Encoches"},
    {code:'B I P/BIR',title:"Biseautage"},
    {code:'T R M P',title:"Trempage"},
    {code:'B O',title:"Bombage"},
    {code:'S A',title:"Sablage"},
    {code:'G R',title:"Gravage"},
    {code:'A l',title:"Aluminium"},
    {code:'P ',title:"Pose"},
  ];
  ngOnInit(): void {}


}

