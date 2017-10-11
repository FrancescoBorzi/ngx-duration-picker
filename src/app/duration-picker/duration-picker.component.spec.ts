import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DurationPickerComponent } from './duration-picker.component';

describe('DurationPickerComponent', () => {
  let component: DurationPickerComponent;
  let fixture: ComponentFixture<DurationPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationPickerComponent ],
      imports: [ FormsModule ],
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

  it('generate() should correctly work', () => {
    set(component, 1, 2, 3, 4, 5, 6, 7);
    expect(component.generate()).toBe('P1Y2M3W4DT5H6M7S');

    set(component, '1', '2', '3', '4', '5', '6', '7');
    expect(component.generate()).toBe('P1Y2M3W4DT5H6M7S');

    set(component, 1, 0, 0, 0, 0, 0, 0);
    expect(component.generate()).toBe('P1Y');

    set(component, 0, 123, 0, 0, 0, 0, 0);
    expect(component.generate()).toBe('P123M');

    set(component, 0, 0, 3, 0, 0, 0, 0);
    expect(component.generate()).toBe('P3W');

    set(component, 0, 0, 0, 2, 0, 0, 0);
    expect(component.generate()).toBe('P2D');

    set(component, 0, 0, 0, 0, 5, 0, 0);
    expect(component.generate()).toBe('PT5H');

    set(component, 0, 0, 0, 0, 0, 9, 0);
    expect(component.generate()).toBe('PT9M');

    set(component, 0, 0, 0, 0, 0, 0, 10);
    expect(component.generate()).toBe('PT10S');

    set(component, 0, 9, 0, 0, 0, 10, 0);
    expect(component.generate()).toBe('P9MT10M');

    set(component, 'wrong', 'wrong', 'wrong', 'wrong', 'wrong', 'wrong', 'wrong');
    expect(component.generate()).toBe(null);
  });

  it('setting the options should correctly affect the configuration', () => {
    component.options = { showWeeks: false, showSeconds: true, someNonExistingProperty: 'test' };

    expect(component.config.showWeeks).toBe(false);
    expect(component.config.showSeconds).toBe(true);
  });

  it('parse() should correctly parse the ISO8601 string', () => {
    component.value = 'P1Y2M3W4DT5H6M7S';

    component.parse();

    expect(component.years).toBe(1);
    expect(component.months).toBe(2);
    expect(component.weeks).toBe(3);
    expect(component.days).toBe(4);
    expect(component.hours).toBe(5);
    expect(component.minutes).toBe(6);
    expect(component.seconds).toBe(7);
  });

  it('parse() should do nothing if the value is null', () => {
    component.value = null;

    component.parse();

    expect(component.years).toBe(0);
    expect(component.months).toBe(0);
    expect(component.weeks).toBe(0);
    expect(component.days).toBe(0);
    expect(component.hours).toBe(0);
    expect(component.minutes).toBe(0);
    expect(component.seconds).toBe(0);
  });

  it('parse() output a console error if the provided value has a bad format', () => {
    const badValue = 'this is not a good value';
    const spyError = spyOn(console, 'error');
    component.value = badValue;

    component.parse();

    expect(spyError).toHaveBeenCalledWith(`DurationPicker: invalid initial value: ${badValue}`);
    expect(component.years).toBe(0);
    expect(component.months).toBe(0);
    expect(component.weeks).toBe(0);
    expect(component.days).toBe(0);
    expect(component.hours).toBe(0);
    expect(component.minutes).toBe(0);
    expect(component.seconds).toBe(0);
  });
});

function set(
  component: DurationPickerComponent,
  years,
  months,
  weeks,
  days,
  hours,
  minutes,
  seconds,
) {
  component.years = years;
  component.months = months;
  component.weeks = weeks;
  component.days = days;
  component.hours = hours;
  component.minutes = minutes;
  component.seconds = seconds;
}
