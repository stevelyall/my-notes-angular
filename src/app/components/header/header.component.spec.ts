import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule
      ],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be instantiated correctly', () => {
    expect(component).toBeDefined();
  });


  it('add button should exist', () => {
    const addButton = fixture.nativeElement.querySelector('mat-icon');
    expect(addButton).toBeDefined();
  });

  it('add button should emit event when clicked', () => {
    spyOn(component.onAddClick, 'emit');

    fixture.debugElement.nativeElement.querySelector('mat-icon').click();

    fixture.whenStable().then(() => {
      expect(component.onAddClick.emit).toHaveBeenCalled();
    });

  });

});
