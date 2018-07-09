import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<div></div>',
})
export class MockHeaderComponent {
  @Output() onAddClick = new EventEmitter<void>();
}
