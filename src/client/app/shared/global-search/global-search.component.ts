import {Component, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'global-search',
  template: `
<label class="control" for="search">
    <input type="text"
           id="search"
           class="form-control"
           #input
           (input)="globalUpdate.emit({value: input.value})"
           placeholder="Search" />          
</label>
`
})

export class GlobalSearchComponent {
  @Output() globalUpdate = new EventEmitter();
}
