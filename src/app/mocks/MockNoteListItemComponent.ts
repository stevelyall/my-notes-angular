import {Component, Input} from '@angular/core';
import {Note} from '../interfaces/note';

@Component({
  selector: 'app-note-list-item',
  template: '<div></div>',
})
export class MockNoteListItemComponent {
  @Input() note: Note;
}
