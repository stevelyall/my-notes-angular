import {Component, Input} from '@angular/core';
import {Note} from '../../interfaces/note';

/**
 * List of notes displayed by the app.
 * Responsible for showing note list items, or a message if there are none to display.
 */
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {

  @Input() notes: Note[];

  /**
   * helper
   * @returns {boolean} true if the note list should be shown, false otherwise
   * @private
   */
  private _isNoteListEmpty(): boolean {
    return !this.notes || !this.notes.length;
  }
}
