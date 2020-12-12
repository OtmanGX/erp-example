import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
@Component({
  selector: 'ngx-pop-warn',
  templateUrl: './pop-warn.component.html',
  styleUrls: ['./pop-warn.component.scss']
})
export class PopWarnComponent   {
  @Input() title: string;

  constructor(
    private ref: NbDialogRef<PopWarnComponent>,

  ) { }

  ngOnInit(): void {
  }

  closePopup() {
    this.ref.close();
  }

}
