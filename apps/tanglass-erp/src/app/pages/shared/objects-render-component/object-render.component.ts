import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'ngx-object-render',
  template: `<a  (click)="navigate()">{{ linkText }}</a>`,

  styleUrls: ['./object-render.component.scss']

})
export class ObjectRenderComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}
  public linkText: string;
  public Id;

  @Input()
  public value;

  @Input()
  rowData: any;

  ngOnInit() {
    this.linkText = this.value.linkText;
    this.Id=this.rowData.id
  }
  navigate(){
    this.router.navigate([this.value.link, this.Id], );
  }
}
