import { Component, OnInit,Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'ngx-keyboard-items',
  templateUrl: './keyboard-items.component.html',
  styleUrls: ['./keyboard-items.component.scss']
})
export class KeyboardItemsComponent implements OnInit {
  @Input() listItems: [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
   }
 

  showFiche(item:string):void{
    this.router.navigate(["../", item.split(' ').join('')], { relativeTo: this.route });


}
}
