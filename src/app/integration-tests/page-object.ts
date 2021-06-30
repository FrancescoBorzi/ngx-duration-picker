import { ComponentFixture } from '@angular/core/testing';

/* CSS selectors (elements, #IDs and .classes) */

const DURATION_PICKER = 'ngx-duration-picker';

const OUTPUT = '.output';
const SET_VALUE_BUTTON = '.set-value';
const TOGGLE_BUTTON = '.toggle';
const TOUCHED_STATUS = '.touched-status';
const MAKE_UNTOUCHED_BUTTON = '.make-untouched';
const TOGGLE_NEGATIVE_BUTTON = '#toggle-negative';

const DP_YEARS_ARROW_UP = '#dp-years-up';
const DP_MONTHS_ARROW_UP = '#dp-months-up';
const DP_WEEKS_ARROW_UP = '#dp-weeks-up';
const DP_DAYS_ARROW_UP = '#dp-days-up';
const DP_HOURS_ARROW_UP = '#dp-hours-up';
const DP_MINUTES_ARROW_UP = '#dp-minutes-up';
const DP_SECONDS_ARROW_UP = '#dp-seconds-up';

const DP_YEARS_ARROW_DOWN = '#dp-years-down';
const DP_MONTHS_ARROW_DOWN = '#dp-months-down';
const DP_WEEKS_ARROW_DOWN = '#dp-weeks-down';
const DP_DAYS_ARROW_DOWN = '#dp-days-down';
const DP_HOURS_ARROW_DOWN = '#dp-hours-down';
const DP_MINUTES_ARROW_DOWN = '#dp-minutes-down';
const DP_SECONDS_ARROW_DOWN = '#dp-seconds-down';

const DP_YEARS_INPUT = '#dp-years';
const DP_MONTHS_INPUT = '#dp-months';
const DP_WEEKS_INPUT = '#dp-weeks';
const DP_DAYS_INPUT = '#dp-days';
const DP_HOURS_INPUT = '#dp-hours';
const DP_MINUTES_INPUT = '#dp-minutes';
const DP_SECONDS_INPUT = '#dp-seconds';

const DP_YEARS_LABEL = '#dp-years-label';
const DP_MONTHS_LABEL = '#dp-months-label';
const DP_WEEKS_LABEL = '#dp-weeks-label';
const DP_DAYS_LABEL = '#dp-days-label';
const DP_HOURS_LABEL = '#dp-hours-label';
const DP_MINUTES_LABEL = '#dp-minutes-label';
const DP_SECONDS_LABEL = '#dp-seconds-label';

const DP_VALUE = '#dp-duration-value';
const DP_SIGN = '#dp-sign';

const PREVIEW_FORMAT_INPUT = '#preview-format-input';
const DP_YEARS_LABEL_INPUT = '#years-label-input';
const DP_WEEKS_LABEL_INPUT = '#weeks-label-input';
const DP_HOURS_LABEL_INPUT = '#hours-label-input';
const DP_YEARS_STEPS_INPUT = '#years-steps-input';
const DP_WEEKS_STEPS_INPUT = '#weeks-steps-input';
const DP_HOURS_STEPS_INPUT = '#hours-steps-input';


export class PageObject<ComponentType> {

  constructor(protected fixture: ComponentFixture<ComponentType>, protected wrapperSelector: string) {}

  detectChanges() {
    this.fixture.detectChanges();
  }

  removeElement() {
    this.fixture.debugElement.nativeElement.remove();
  }

  whenStable() {
    return this.fixture.whenStable();
  }

  query<T extends HTMLElement>(selector: string, assert = true): T {
    const element: T = this.fixture.nativeElement.querySelector(selector);

    if (assert) {
      expect(element).toBeTruthy(`Element with selector "${selector}" was not found.`);
    }

    return element;
  }

  queryInsideElement<T extends HTMLElement>(element: HTMLElement, selector: string, assert = true) {
    const child: T = element.querySelector<T>(selector);

    if (assert) {
      expect(child).toBeTruthy(`Element with selector "${selector}" inside "${element.tagName}" was not found.`);
    }

    return child;
  }

  clickElement(element: HTMLElement): void {
    element.click();
    this.fixture.detectChanges();
  }

  setInputValue(inputElement: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value: string | number) {
    inputElement.value = `${value}`;
    inputElement.dispatchEvent(new Event('input'));
    inputElement.dispatchEvent(new Event('change'));
    inputElement.dispatchEvent(new Event('blur'));
    this.fixture.detectChanges();
  }

  public clear(inputElement: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    this.setInputValue(inputElement, '');
  }

  get wrapper() { return this.query(this.wrapperSelector); }

  get durationPicker() { return this.queryInsideElement(this.wrapper, DURATION_PICKER); }
  get outputContainer() { return this.queryInsideElement(this.wrapper, OUTPUT); }
  get setValueButton() { return this.queryInsideElement(this.wrapper, SET_VALUE_BUTTON); }
  get toggleButton() { return this.queryInsideElement(this.wrapper, TOGGLE_BUTTON); }
  get touchedStatusContainer() { return this.queryInsideElement(this.wrapper, TOUCHED_STATUS); }
  get makeUntouchedButton() { return this.queryInsideElement(this.wrapper, MAKE_UNTOUCHED_BUTTON); }
  get toggleNegativeButton() { return this.queryInsideElement(this.wrapper, TOGGLE_NEGATIVE_BUTTON); }
  get previewFormatInput() { return this.queryInsideElement<HTMLInputElement>(this.wrapper, PREVIEW_FORMAT_INPUT); }
  get dpYearsLabelInput() { return this.queryInsideElement<HTMLInputElement>(this.wrapper, DP_YEARS_LABEL_INPUT); }
  get dpWeeksLabelInput() { return this.queryInsideElement<HTMLInputElement>(this.wrapper, DP_WEEKS_LABEL_INPUT); }
  get dpHoursLabelInput() { return this.queryInsideElement<HTMLInputElement>(this.wrapper, DP_HOURS_LABEL_INPUT); }
  get dpYearsStepsInput() { return this.queryInsideElement<HTMLInputElement>(this.wrapper, DP_YEARS_STEPS_INPUT); }
  get dpWeeksStepsInput() { return this.queryInsideElement<HTMLInputElement>(this.wrapper, DP_WEEKS_STEPS_INPUT); }
  get dpHoursStepsInput() { return this.queryInsideElement<HTMLInputElement>(this.wrapper, DP_HOURS_STEPS_INPUT); }

  get dpYearsArrowUp() { return this.queryInsideElement(this.durationPicker, DP_YEARS_ARROW_UP); }
  get dpMonthsArrowUp() { return this.queryInsideElement(this.durationPicker, DP_MONTHS_ARROW_UP); }
  get dpWeeksArrowUp() { return this.queryInsideElement(this.durationPicker, DP_WEEKS_ARROW_UP); }
  get dpDaysArrowUp() { return this.queryInsideElement(this.durationPicker, DP_DAYS_ARROW_UP); }
  get dpHoursArrowUp() { return this.queryInsideElement(this.durationPicker, DP_HOURS_ARROW_UP); }
  get dpMinutesArrowUp() { return this.queryInsideElement(this.durationPicker, DP_MINUTES_ARROW_UP); }
  get dpSecondsArrowUp() { return this.queryInsideElement(this.durationPicker, DP_SECONDS_ARROW_UP); }

  get dpYearsArrowDown() { return this.queryInsideElement(this.durationPicker, DP_YEARS_ARROW_DOWN); }
  get dpMonthsArrowDown() { return this.queryInsideElement(this.durationPicker, DP_MONTHS_ARROW_DOWN); }
  get dpWeeksArrowDown() { return this.queryInsideElement(this.durationPicker, DP_WEEKS_ARROW_DOWN); }
  get dpDaysArrowDown() { return this.queryInsideElement(this.durationPicker, DP_DAYS_ARROW_DOWN); }
  get dpHoursArrowDown() { return this.queryInsideElement(this.durationPicker, DP_HOURS_ARROW_DOWN); }
  get dpMinutesArrowDown() { return this.queryInsideElement(this.durationPicker, DP_MINUTES_ARROW_DOWN); }
  get dpSecondsArrowDown() { return this.queryInsideElement(this.durationPicker, DP_SECONDS_ARROW_DOWN); }

  get dpYearsInput() { return this.queryInsideElement<HTMLInputElement>(this.durationPicker, DP_YEARS_INPUT); }
  get dpMonthsInput() { return this.queryInsideElement<HTMLInputElement>(this.durationPicker, DP_MONTHS_INPUT); }
  get dpWeeksInput() { return this.queryInsideElement<HTMLInputElement>(this.durationPicker, DP_WEEKS_INPUT); }
  get dpDaysInput() { return this.queryInsideElement<HTMLInputElement>(this.durationPicker, DP_DAYS_INPUT); }
  get dpHoursInput() { return this.queryInsideElement<HTMLInputElement>(this.durationPicker, DP_HOURS_INPUT); }
  get dpMinutesInput() { return this.queryInsideElement<HTMLInputElement>(this.durationPicker, DP_MINUTES_INPUT); }
  get dpSecondsInput() { return this.queryInsideElement<HTMLInputElement>(this.durationPicker, DP_SECONDS_INPUT); }

  get dpYearsLabel() { return this.queryInsideElement(this.durationPicker, DP_YEARS_LABEL); }
  get dpMonthsLabel() { return this.queryInsideElement(this.durationPicker, DP_MONTHS_LABEL); }
  get dpWeeksLabel() { return this.queryInsideElement(this.durationPicker, DP_WEEKS_LABEL); }
  get dpDaysLabel() { return this.queryInsideElement(this.durationPicker, DP_DAYS_LABEL); }
  get dpHoursLabel() { return this.queryInsideElement(this.durationPicker, DP_HOURS_LABEL); }
  get dpMinutesLabel() { return this.queryInsideElement(this.durationPicker, DP_MINUTES_LABEL); }
  get dpSecondsLabel() { return this.queryInsideElement(this.durationPicker, DP_SECONDS_LABEL); }

  get dpValueContainer() { return this.queryInsideElement(this.durationPicker, DP_VALUE); }
  get dpSignButton() { return this.queryInsideElement(this.durationPicker, DP_SIGN, false); }
  get dpSignButtonIcon() { return this.queryInsideElement(this.dpSignButton, 'span'); }
}
