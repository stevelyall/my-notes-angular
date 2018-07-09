import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NoteListItemComponent} from './note-list-item.component';
import {MatCardModule} from '@angular/material';
import {mockNoteWithoutId} from '../../mocks';

describe('NoteListItemComponent', () => {
  let component: NoteListItemComponent;
  let fixture: ComponentFixture<NoteListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [NoteListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListItemComponent);
    component = fixture.componentInstance;
    component.note = mockNoteWithoutId;

    fixture.autoDetectChanges();
  });

  it('should be instantiated correctly', () => {
    expect(component).toBeDefined();
  });

  describe('note title', () => {

    // TODO extract shared variable from child specs describe https://github.com/angular/angular/issues/19292
    it('should exist', () => {
      const titleElement = fixture.nativeElement.querySelector('mat-card-title');
      expect(titleElement).toBeDefined();
    });

    it('should match note object title', () => {
      const titleElement = fixture.nativeElement.querySelector('mat-card-title');
      expect(titleElement.textContent).toEqual(mockNoteWithoutId.title);
    });

  });

  describe('note content', () => {
    // TODO extract shared variable from child specs describe https://github.com/angular/angular/issues/19292

    it('should exist', () => {
      const contentElement = fixture.nativeElement.querySelector('mat-card-content');
      expect(contentElement).toBeDefined();
    });

    it('should match note object title', () => {
      const contentElement = fixture.nativeElement.querySelector('mat-card-content');
      expect(contentElement.textContent).toEqual(mockNoteWithoutId.content);
    });
  });


});
