import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NoteListComponent} from './note-list.component';
import {MatListModule} from '@angular/material';
import {MockNoteListItemComponent, mockNotes} from '../../mocks';

describe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [
        NoteListComponent,
        MockNoteListItemComponent
      ]
    })
      .compileComponents();
  }));

  describe('empty list', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(NoteListComponent);
      component = fixture.componentInstance;

      component.notes = [];

      fixture.detectChanges();
    });

    it('should be instantiated correctly', () => {
      expect(component).toBeDefined();
    });


    it('should contain placeholder message', () => {
      const placeholder = fixture.nativeElement.querySelector('p');
      expect(placeholder).toBeDefined();
    });

    it('should not contain list items', () => {
      const listItems = fixture.nativeElement.querySelectorAll('app-note-list-item');
      expect(listItems.length).toEqual(0);
    });

  });

  describe('list with items', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(NoteListComponent);
      component = fixture.componentInstance;

      component.notes = mockNotes;

      fixture.detectChanges();
    });

    it('should be instantiated correctly', () => {
      expect(component).toBeDefined();
    });


    it('should not contain placeholder message', () => {
      const placeholder = fixture.nativeElement.querySelector('p');
      expect(placeholder).toBeFalsy();
    });

    it('should contain list items', () => {
      const listItems = fixture.nativeElement.querySelectorAll('app-note-list-item');
      expect(listItems.length).toEqual(2);
    });

  });
});




