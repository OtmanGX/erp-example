import { Component, OnInit,EventEmitter, Output, Input } from "@angular/core";
@Component({
  selector: 'ngx-uni-render-select',
  template:  `
 <nb-select size="tiny" fullWidth [(ngModel)]="renderd_Value" (ngModelChange)="modelChanged()" >
    <nb-option *ngFor="let option of options" [value]='option'>{{option}}</nb-option>
</nb-select>
`,
styleUrls: ['./uni-select-render.component.scss']

})
export class UniSelectRenderComponent implements OnInit {
  @Input()
  value;
 @Input()
 rowData: any;
 options
 renderd_Value:string='';
 @Output() emitRow = new EventEmitter<any>();

constructor() { }

  ngOnInit(): void {
     this.options=this.rowData.item.companie;
     if(this.value){
      this.renderd_Value=this.value
     }
     else{
      if (this.options[0] ){
        this.renderd_Value=this.options[0];
        this.modelChanged()
      }
      }
      this.rowData.companie=this.renderd_Value;
}
modelChanged(){
  this.rowData.companie=this.renderd_Value;
  this.emitRow.emit(this.rowData);
}
}

