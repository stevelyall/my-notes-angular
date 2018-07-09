import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockNotesComponent} from './mocks';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockNotesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should contain notes component'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const notesComponent = fixture.nativeElement.querySelector('app-notes');
    expect(notesComponent).toBeDefined();
  }));

});
