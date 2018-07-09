import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotesComponent} from './notes.component';
import {NoteService} from '../../services/note.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Observable} from 'rxjs';
import {MockHeaderComponent, MockNoteListComponent, mockNotes} from '../../mocks';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotesComponent,
        MockHeaderComponent,
        MockNoteListComponent
      ],
      providers: [
        {
          provide: NoteService, useValue: stubNoteService
        },
        {
          provide: MatDialog, useValue: stubDialog
        },
        {
          provide: MatSnackBar, useValue: stubSnackbarRef
        },
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be instantiated correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should contain header', () => {
    const heaader = fixture.nativeElement.querySelector('app-header');
    expect(heaader).toBeDefined();
  });

  it('should contain note list', () => {
    const noteList = fixture.nativeElement.querySelector('app-note-list');
    expect(noteList).toBeDefined();
  });

});

const stubNoteService = {
  getAllNotes() {
    return Observable.create(mockNotes);
  },
  addNote(note) {
    return Observable.create(mockNotes[0]);
  }
};

const stubDialog = {
  open: () => {
    return {
      afterClosed: () => {
        return Observable.create(mockNotes[0]);
      }
    };
  }

};
const stubSnackbarRef = {
  open: () => {
    return {};
  }
};
