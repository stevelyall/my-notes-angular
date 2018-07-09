import {Component, Input} from '@angular/core';
import {Note} from '../interfaces/note';

@Component({
  selector: 'app-note-list',
  template: '<div></div>',
})
export class MockNoteListComponent {
  @Input() notes: Note[];
}
