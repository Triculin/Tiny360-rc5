import {Component, OnInit, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'global-search',
  template: `
<label class="ng2-table__global-search-label" for="search">
    <input type="text"
           id="search"
           class="ng2-table__input"
           #input
           (input)="globalUpdate.emit({value: input.value})"
           placeholder="Search" />
</label>`
})

export class GlobalSearch {
  @Output() globalUpdate = new EventEmitter();
}
