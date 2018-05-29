import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {DurationPickerMode, DurationPickerOptions} from './duration-picker';

const DEFAULT_DURATION_PICKER_MODE: DurationPickerMode = 'ISO_8601';
const ISO_REGEX: RegExp = /^[+\-]?P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d+[HMS])(\d+H)?(\d+M)?(\d+S)?)?$/;
const DEFAULT_CONFIG_OPTIONS: DurationPickerOptions = {
  showNegative: false,
  showButtons: true,
  showPreview: true,
  showLetters: true,
  showYears: true,
  showMonths: true,
  showWeeks: true,
  showDays: true,
  showHours: true,
  showMinutes: true,
  showSeconds: true,
  zeroValue: 'PT0S'
};
const DURATION_UNITS = {
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
  weeks: 604800,
  months: 2628000,
  years: 31536000
};

@Component({
  selector: 'ngxd-duration-picker',
  templateUrl: './duration-picker.component.html',
  styleUrls: ['./duration-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationPickerComponent),
      multi: true
    }
  ],
})
export class DurationPickerComponent implements OnInit, ControlValueAccessor {
  @Input() set options(options: DurationPickerOptions) {
    this.config = {...DEFAULT_CONFIG_OPTIONS, ...options};
  }

  get value(): string | number {
    return this._value;
  }

  @Input()
  set value(value: string | number) {
    this._value = value;
    this.parse();
  }

  get mode(): DurationPickerMode {
    return this._mode;
  }

  @Input()
  set mode(mode: DurationPickerMode) {
    this._mode = mode;
    this.parse();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  @Output() valueChange = new EventEmitter<string | number>();

  private _value: string | number;
  private _mode = DEFAULT_DURATION_PICKER_MODE;
  private _disabled = false;
  private _negative = false;
  private _years = 0;
  private _months = 0;
  private _weeks = 0;
  private _days = 0;
  private _hours = 0;
  private _minutes = 0;
  private _seconds = 0;

  config: DurationPickerOptions = DEFAULT_CONFIG_OPTIONS;

  get negative() {
    return this._negative;
  }

  set negative(value) {
    this._negative = value;
    this.emitNewValue();
  }

  get years() {
    return this._years;
  }

  set years(value) {
    value = this.parseNumber(value) > 0 ? value : 0;
    this._years = value;
    this.emitNewValue();
  }

  get months() {
    return this._months;
  }

  set months(value) {
    value = this.parseNumber(value) > 0 ? value : 0;
    this._months = value;
    this.emitNewValue();
  }

  get weeks() {
    return this._weeks;
  }

  set weeks(value) {
    value = this.parseNumber(value) > 0 ? value : 0;
    this._weeks = value;
    this.emitNewValue();
  }

  get days() {
    return this._days;
  }

  set days(value) {
    value = this.parseNumber(value) > 0 ? value : 0;
    this._days = value;
    this.emitNewValue();
  }

  get hours() {
    return this._hours;
  }

  set hours(value) {
    value = this.parseNumber(value) > 0 ? value : 0;
    this._hours = value;
    this.emitNewValue();
  }

  get minutes() {
    return this._minutes;
  }

  set minutes(value) {
    value = this.parseNumber(value) > 0 ? value : 0;
    this._minutes = value;
    this.emitNewValue();
  }

  get seconds() {
    return this._seconds;
  }

  set seconds(value) {
    value = this.parseNumber(value) > 0 ? value : 0;
    this._seconds = value;
    this.emitNewValue();
  }

  constructor() {
  }

  ngOnInit() {
    this.parse();
    this.value = this.generate();
  }

  onChange(_: any) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  parse() {
    if (!this.value || !this.mode) {
      return;
    }

    if (this.mode === 'ISO_8601') {
      const match = ISO_REGEX.exec(this.value as string);

      if (!match) {
        console.error(`DurationPicker: invalid initial value: ${this.value}`);
        return;
      }

      this._negative = match[0].startsWith('-');
      this._years = this.parseNumber(match[1]);
      this._months = this.parseNumber(match[2]);
      this._weeks = this.parseNumber(match[3]);
      this._days = this.parseNumber(match[4]);
      this._hours = this.parseNumber(match[6]);
      this._minutes = this.parseNumber(match[7]);
      this._seconds = this.parseNumber(match[8]);
    } else {
      const baseValue = DURATION_UNITS[this.mode];
      let numberValue = (this.value as number) * baseValue;
      this._negative = numberValue < 0;
      numberValue = numberValue < 0 ? (numberValue * -1) : numberValue;
      this._years = Math.floor(numberValue / DURATION_UNITS.years);
      numberValue = numberValue - (this._years * DURATION_UNITS.years);
      this._months = Math.floor(numberValue / DURATION_UNITS.months);
      numberValue = numberValue - (this._months * DURATION_UNITS.months);
      this._weeks = Math.floor(numberValue / DURATION_UNITS.weeks);
      numberValue = numberValue - (this._weeks * DURATION_UNITS.weeks);
      this._days = Math.floor(numberValue / DURATION_UNITS.days);
      numberValue = numberValue - (this._days * DURATION_UNITS.days);
      this._hours = Math.floor(numberValue / DURATION_UNITS.hours);
      numberValue = numberValue - (this._hours * DURATION_UNITS.hours);
      this._minutes = Math.floor(numberValue / DURATION_UNITS.minutes);
      numberValue = numberValue - (this._minutes * DURATION_UNITS.minutes);
      this._seconds = Math.floor(numberValue / DURATION_UNITS.seconds);
    }
  }

  parseNumber(value): number {
    return value ? parseInt(value, 10) : 0;
  }

  generate(): string | number {
    if (this.mode === 'ISO_8601') {
      let output = 'P';

      if (this.config.showNegative && this.negative) {
        output = '-' + output;
      }

      if (this.config.showYears && this.years) {
        output += `${this.years}Y`;
      }
      if (this.config.showMonths && this.months) {
        output += `${this.months}M`;
      }
      if (this.config.showWeeks && this.weeks) {
        output += `${this.weeks}W`;
      }
      if (this.config.showDays && this.days) {
        output += `${this.days}D`;
      }
      if (
        (this.config.showHours && this.hours)
        || (this.config.showMinutes && this.minutes)
        || (this.config.showSeconds && this.seconds)
      ) {
        output += 'T';

        if (this.config.showHours && this.hours) {
          output += `${this.hours}H`;
        }
        if (this.config.showMinutes && this.minutes) {
          output += `${this.minutes}M`;
        }
        if (this.config.showSeconds && this.seconds) {
          output += `${this.seconds}S`;
        }
      }

      // if all values are empty, just output null
      if (output === 'P' || output === '-P') {
        output = this.config.zeroValue;
      }

      return output;
    } else {
      const currentValueInSeconds = (this.years * DURATION_UNITS.years) +
        (this.months * DURATION_UNITS.months) +
        (this.weeks * DURATION_UNITS.weeks) +
        (this.days * DURATION_UNITS.days) +
        (this.hours * DURATION_UNITS.hours) +
        (this.minutes * DURATION_UNITS.minutes) +
        (this.seconds * DURATION_UNITS.seconds);
      const duration = Math.floor(currentValueInSeconds / DURATION_UNITS[this.mode]);
      return this.config.showNegative && this.negative ? (duration * -1) : duration;
    }
  }

  emitNewValue() {
    this.value = this.generate();
    this.valueChange.emit(this.value);
    this.onTouched();
    this.onChange(this.value);
  }
}
