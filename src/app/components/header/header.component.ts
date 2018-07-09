import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Header for the app. Contains Add button, emits event to Notes component when clicked.
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Output() onAddClick = new EventEmitter<void>();

}
