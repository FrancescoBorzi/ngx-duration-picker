import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationPickerComponent } from './duration-picker.component';

describe('DurationPickerComponent', () => {
  let component: DurationPickerComponent;
  let fixture: ComponentFixture<DurationPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
