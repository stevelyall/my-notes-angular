import {Component, Input} from '@angular/core';
import {Note} from '../../interfaces/note';

/**
 * Presentational component representing a single note in the list.
 */
@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent {

  @Input() note: Note;
}
