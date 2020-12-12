import { Component, Inject, OnInit } from "@angular/core";
import { NB_WINDOW, NbMenuService } from "@nebular/theme";
import { filter, map } from "rxjs/operators";
@Component({
  selector: "ngx-actions-render",
  template: `
    <button
      outline
      nbButton
      ghost
      [nbContextMenu]="items"
      nbContextMenuTag="my-context-menu"
      nbContextMenuPlacement="bottom"
    >
      <nb-icon icon="more-vertical-outline"> </nb-icon>
    </button>
  `,
styleUrls: []
})
export class ActionsRenderComponent implements OnInit {
  items = [{ title: "Affecter Services" }, { title: "Supprimer" }];
  constructor(
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window
  ) {}

  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "my-context-menu"),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => this.window.alert(`${title} was clicked!`));
  }
}
