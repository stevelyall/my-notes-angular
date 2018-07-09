import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoteEdtDialogComponent} from './note-edt-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('NoteEdtDialogComponent', () => {
  let component: NoteEdtDialogComponent;
  let fixture: ComponentFixture<NoteEdtDialogComponent>;

  const TITLE_MAX_LENGTH = 255;
  const CONTENT_MAX_LENGTH = 1024;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule

      ],
      declarations: [
        NoteEdtDialogComponent
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEdtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be instantiated correctly', () => {
    expect(component).toBeDefined();
  });

  describe('form', () => {
    it('should contain title textarea', () => {
      const title = fixture.nativeElement.querySelector('mat-form-field textarea#title');
      expect(title).toBeDefined();
    });

    it('should contain content textarea', () => {
      const content = fixture.nativeElement.querySelector('mat-form-field textarea#content');
      expect(content).toBeDefined();
    });

    it('should contain save button', () => {
      const content = fixture.nativeElement.querySelector('mat-dialog-actions button');
      expect(content).toBeDefined();
      expect(content.textContent).toEqual('Save');
    });

    it('title should be invalid if title is empty', () => {
      const title = component.noteForm.controls['title'];
      title.setValue('');
      expect(title.invalid).toBeTruthy();
    });

    it('title should be valid if title has at least 1 character', () => {
      const title = component.noteForm.controls['title'];
      title.setValue('A');
      expect(title.valid).toBeTruthy();
    });


    it('title should be valid if title has 255 characters', () => {
      const title = component.noteForm.controls['title'];
      const testString = 'A'.repeat(TITLE_MAX_LENGTH);
      title.setValue(testString);
      expect(title.valid).toBeTruthy();
    });


    it('title should be invalid if title has over 255 characters', () => {
      const title = component.noteForm.controls['title'];
      const testString = 'A'.repeat(TITLE_MAX_LENGTH + 1);
      title.setValue(testString);
      expect(title.invalid).toBeTruthy();
    });

    it('content should be invalid if content is empty', () => {
      const content = component.noteForm.controls['content'];
      content.setValue('');
      expect(content.invalid).toBeTruthy();
    });

    it('content should be valid if content has at least 1 character', () => {
      const content = component.noteForm.controls['content'];
      content.setValue('A');
      expect(content.valid).toBeTruthy();
    });

    it('content should be valid if content has 1024 characters', () => {
      const content = component.noteForm.controls['content'];
      const testString = 'A'.repeat(CONTENT_MAX_LENGTH);
      content.setValue(testString);
      expect(content.valid).toBeTruthy();
    });

    it('content should be invalid if content has over 1024 characters', () => {
      const content = component.noteForm.controls['content'];
      const testString = 'A'.repeat(CONTENT_MAX_LENGTH + 1);
      content.setValue(testString);
      expect(content.invalid).toBeTruthy();
    });

  });
});
