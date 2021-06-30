import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DurationPickerComponent } from './duration-picker.component';

describe('DurationPickerComponent', () => {
  let component: DurationPickerComponent;
  let fixture: ComponentFixture<DurationPickerComponent>;

  const myFunc = () => 'something';

  beforeEach(waitForAsync(() => {
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

  it('generate() should correctly generate the duration values', () => {
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
  });

  it('generate() should correctly generate the negative duration values', () => {
    set(component, 1, 2, 3, 4, 5, 6, 7, true);
    expect(component.generate()).toBe('-P1Y2M3W4DT5H6M7S');

    set(component, '1', '2', '3', '4', '5', '6', '7', true);
    expect(component.generate()).toBe('-P1Y2M3W4DT5H6M7S');

    set(component, 1, 0, 0, 0, 0, 0, 0, true);
    expect(component.generate()).toBe('-P1Y');

    set(component, 0, 123, 0, 0, 0, 0, 0, true);
    expect(component.generate()).toBe('-P123M');

    set(component, 0, 0, 3, 0, 0, 0, 0, true);
    expect(component.generate()).toBe('-P3W');

    set(component, 0, 0, 0, 2, 0, 0, 0, true);
    expect(component.generate()).toBe('-P2D');

    set(component, 0, 0, 0, 0, 5, 0, 0, true);
    expect(component.generate()).toBe('-PT5H');

    set(component, 0, 0, 0, 0, 0, 9, 0, true);
    expect(component.generate()).toBe('-PT9M');

    set(component, 0, 0, 0, 0, 0, 0, 10, true);
    expect(component.generate()).toBe('-PT10S');

    set(component, 0, 9, 0, 0, 0, 10, 0, true);
    expect(component.generate()).toBe('-P9MT10M');
  });

  it('generate() should correctly set the zero value according to the configuration', () => {
    set(component, 0, 0, 0, 0, 0, 0, 0);

    expect(component.generate()).toBe('PT0S');

    set(component, 0, 0, 0, 0, 0, 0, 0, true);

    expect(component.generate()).toBe('PT0S');

    component.config.zeroValue = null;
    expect(component.generate()).toBe(null);

    component.config.zeroValue = 'myCustomValue';
    expect(component.generate()).toBe('myCustomValue');
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
    expect(component.negative).toBe(false);

    component.value = '-P1Y2M3W4DT5H6M7S';

    component.parse();

    expect(component.years).toBe(1);
    expect(component.months).toBe(2);
    expect(component.weeks).toBe(3);
    expect(component.days).toBe(4);
    expect(component.hours).toBe(5);
    expect(component.minutes).toBe(6);
    expect(component.seconds).toBe(7);
    expect(component.negative).toBe(true);
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

  it('setDisabledState() should correctly change the disabled status', () => {
    component.setDisabledState(true);
    expect(component.disabled).toBe(true);

    component.setDisabledState(false);
    expect(component.disabled).toBe(false);
  });

  it('registerOnChange(fn) should correctly set the onChange function', () => {
    component.onChange = null;

    component.registerOnChange(myFunc);

    expect(component.onChange).toEqual(myFunc);
  });

  it('registerOnTouched(fn) should correctly set the onTouched function', () => {
    component.onTouched = null;

    component.registerOnTouched(myFunc);

    expect(component.onTouched).toEqual(myFunc);
  });

  it('writeValue(value) should change the value when the new value is NOT null', () => {
    component.value = 'old value';

    component.writeValue('new value');

    expect(component.value).toEqual('new value');
  });

  it('writeValue(value) should NOT change the value if the new value is null', () => {
    component.value = 'old value';

    component.writeValue(null);

    expect(component.value).toEqual('old value');
  });

  it('preview should return proper string', () => {
    const previewFormat = '{{h}} hours : {{m}} minutes : {{s}} seconds';
    const hours = 5;
    const minutes = 32;
    const seconds = 53;
    const expectedPreview = `${hours} hours : ${minutes} minutes : ${seconds} seconds`;
    set(component, 0, 0, 0, 0, hours, minutes, seconds, false, previewFormat);

    expect(component.preview).toEqual(expectedPreview);
  });

  it('preview should return ISO value as string when provided previewFormat is empty string', () => {
    const previewFormat = '';
    const hours = 5;
    const minutes = 32;
    const seconds = 53;
    const expectedPreview = `PT${hours}H${minutes}M${seconds}S`;
    set(component, 0, 0, 0, 0, hours, minutes, seconds, false, previewFormat);

    expect(component.preview).toEqual(expectedPreview);
  });

  it('valueInSeconds should return correct value for each duration unit', () => {
    const minuteInSeconds = 60;
    const hourInSeconds = 3600;
    const dayInSeconds = 86400;
    const weekInSeconds = 6048000;
    const monthInSeconds = 25920000;
    const yearInSeconds = 315360000;

    set(component, 0, 0, 0, 0, 0, 0, 1, false, '', 'seconds');
    expect(component.valueInSeconds).toEqual(1);

    set(component, 0, 0, 0, 0, 0, 1, 0, false, '', 'seconds');
    expect(component.valueInSeconds).toEqual(minuteInSeconds);

    set(component, 0, 0, 0, 0, 1, 0, 0, false, '', 'seconds');
    expect(component.valueInSeconds).toEqual(hourInSeconds);

    set(component, 0, 0, 0, 1, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInSeconds).toEqual(dayInSeconds);

    set(component, 0, 0, 1, 0, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInSeconds).toEqual(weekInSeconds);

    set(component, 0, 1, 0, 0, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInSeconds).toEqual(monthInSeconds);

    set(component, 1, 0, 0, 0, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInSeconds).toEqual(yearInSeconds);
  });

  it('valueInMilliseconds should return correct value for each duration unit', () => {
    const secondInMilliseconds = 1000;
    const minuteInMilliseconds = 60000;
    const hourInMilliseconds = 3600000;
    const dayInMilliseconds = 86400000;
    const weekInMilliseconds = 6048000000;
    const monthInMilliseconds = 25920000000;
    const yearInMilliseconds = 315360000000;

    set(component, 0, 0, 0, 0, 0, 0, 1, false, '', 'seconds');
    expect(component.valueInMilliseconds).toEqual(secondInMilliseconds);

    set(component, 0, 0, 0, 0, 0, 1, 0, false, '', 'seconds');
    expect(component.valueInMilliseconds).toEqual(minuteInMilliseconds);

    set(component, 0, 0, 0, 0, 1, 0, 0, false, '', 'seconds');
    expect(component.valueInMilliseconds).toEqual(hourInMilliseconds);

    set(component, 0, 0, 0, 1, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInMilliseconds).toEqual(dayInMilliseconds);

    set(component, 0, 0, 1, 0, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInMilliseconds).toEqual(weekInMilliseconds);

    set(component, 0, 1, 0, 0, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInMilliseconds).toEqual(monthInMilliseconds);

    set(component, 1, 0, 0, 0, 0, 0, 0, false, '', 'seconds');
    expect(component.valueInMilliseconds).toEqual(yearInMilliseconds);
  });

  it('should return correct valueInSeconds and valueInMilliseconds for negative values', () => {
    const hourInSeconds = 3600;
    const hourInMilliseconds = 3600000;

    set(component, 0, 0, 0, 0, 1, 0, 0, true, '', 'seconds');
    expect(component.valueInSeconds).toEqual(-hourInSeconds);
    expect(component.valueInMilliseconds).toEqual(-hourInMilliseconds);
  });

  it('specific labels should be overwritten', () => {
    set(component, 0, 0, 0, 0, 0, 0, 1, false, '', '', { years: 'years', weeks: 'weeks', hours: 'hours' });
    expect(component.config.labels).toEqual({
      years: 'years',
      months: 'M',
      weeks: 'weeks',
      days: 'D',
      hours: 'hours',
      minutes: 'M',
      seconds: 'S',
    });
  });

  it('incorrect unitSteps should be overwritten with default', () => {
    set(component, 0, 0, 0, 0, 0, 0, 0, false, '', '', {}, {years: -5, weeks: 4, hours: 0, seconds: 3});
    expect(component.config.unitSteps).toEqual({
      years: 1,
      months: 1,
      weeks: 4,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 3,
    });
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
  negative = false,
  previewFormat = 'ISO',
  customOutputFormat = 'ISO',
  labels = {},
  unitSteps = {},
) {
  component.options = {
    ...component.config,
    previewFormat,
    customOutputFormat,
    labels,
    unitSteps,
    showNegative: negative,
  };
  component.years = years;
  component.months = months;
  component.weeks = weeks;
  component.days = days;
  component.hours = hours;
  component.minutes = minutes;
  component.seconds = seconds;
  component.negative = negative;
}
