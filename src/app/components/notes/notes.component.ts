import {Component, OnInit} from '@angular/core';
import {Note} from '../../interfaces/note';
import {NoteService} from '../../services/note.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {NoteEdtDialogComponent} from '../note-edt-dialog/note-edt-dialog.component';

/**
 * Top-level stateful component which handles notes, retrieves them from the API using a service,
 * and shows/hides dialog for adding notes. Acts in response to events from children.
 */
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private _notes: Note[];

  constructor(
    private _noteService: NoteService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this._getAllNotes();
  }

  /**
   * Delegates to the NoteService to retrieve the list of notes from the server.
   * @private
   */
  private _getAllNotes(): void {
    this._noteService.getAllNotes()
      .subscribe((notes) => {
          this._notes = notes;
        },
        (error) => {
          this._snackBar.open('There was a problem retrieving notes from the server');
          console.log('Error retrieving notes', error);
        });
  }

  /**
   * Called when onAddClick event emmitted by the header. Shows the add note dialog.
   * @private
   */
  private _onAddClick(): void {
    const dialogRef = this._dialog.open(NoteEdtDialogComponent, {
      height: '500px',
      width: '700px',
      data: {note: {}}
    });

    dialogRef.afterClosed()
      .subscribe((result) => {
        if (!result) {
          return;
        }
        const note: Note = {
          title: result.title,
          content: result.content
        };

        this._noteService.addNote(note)
          .subscribe((added: Note) => {
            console.log('added note', {added});
            this._snackBar.open('Note added.');
            this._getAllNotes();
          }, (error) => {
            console.log('error adding note', {error});
            this._snackBar.open('There was a problem adding the note.');
          });
      });
  }
}
