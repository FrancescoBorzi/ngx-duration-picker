import { $, browser, ElementFinder } from 'protractor';

import {
  DURATION_PICKER,
  OUTPUT,
  SET_VALUE_BUTTON,
  TOGGLE_BUTTON,
  TOUCHED_STATUS,
  MAKE_UNTOUCHED_BUTTON,
  DP_YEARS_ARROW_UP,
  DP_MONTHS_ARROW_UP,
  DP_WEEKS_ARROW_UP,
  DP_DAYS_ARROW_UP,
  DP_HOURS_ARROW_UP,
  DP_MINUTES_ARROW_UP,
  DP_SECONDS_ARROW_UP,
  DP_YEARS_ARROW_DOWN,
  DP_MONTHS_ARROW_DOWN,
  DP_WEEKS_ARROW_DOWN,
  DP_DAYS_ARROW_DOWN,
  DP_HOURS_ARROW_DOWN,
  DP_MINUTES_ARROW_DOWN,
  DP_SECONDS_ARROW_DOWN,
  DP_YEARS_INPUT,
  DP_MONTHS_INPUT,
  DP_WEEKS_INPUT,
  DP_DAYS_INPUT,
  DP_HOURS_INPUT,
  DP_MINUTES_INPUT,
  DP_SECONDS_INPUT,
  DP_VALUE,
  DP_SIGN,
  TOGGLE_NEGATIVE_BUTTON,
  PREVIEW_FORMAT_INPUT,
  DP_YEARS_LABEL,
  DP_MONTHS_LABEL,
  DP_WEEKS_LABEL,
  DP_DAYS_LABEL,
  DP_HOURS_LABEL,
  DP_MINUTES_LABEL,
  DP_SECONDS_LABEL,
  DP_YEARS_LABEL_INPUT,
  DP_WEEKS_LABEL_INPUT,
  DP_HOURS_LABEL_INPUT,
} from './constants';

export class WrapperPageObject {

  wrapper: ElementFinder;
  durationPicker: ElementFinder;
  outputContainer: ElementFinder;
  setValueButton: ElementFinder;
  toggleButton: ElementFinder;
  touchedStatusContainer: ElementFinder;
  makeUntouchedButton: ElementFinder;
  toggleNegativeButton: ElementFinder;

  dpYearsArrowUp: ElementFinder;
  dpMonthsArrowUp: ElementFinder;
  dpWeeksArrowUp: ElementFinder;
  dpDaysArrowUp: ElementFinder;
  dpHoursArrowUp: ElementFinder;
  dpMinutesArrowUp: ElementFinder;
  dpSecondsArrowUp: ElementFinder;

  dpYearsArrowDown: ElementFinder;
  dpMonthsArrowDown: ElementFinder;
  dpWeeksArrowDown: ElementFinder;
  dpDaysArrowDown: ElementFinder;
  dpHoursArrowDown: ElementFinder;
  dpMinutesArrowDown: ElementFinder;
  dpSecondsArrowDown: ElementFinder;

  dpYearsInput: ElementFinder;
  dpMonthsInput: ElementFinder;
  dpWeeksInput: ElementFinder;
  dpDaysInput: ElementFinder;
  dpHoursInput: ElementFinder;
  dpMinutesInput: ElementFinder;
  dpSecondsInput: ElementFinder;

  dpYearsLabel: ElementFinder;
  dpMonthsLabel: ElementFinder;
  dpWeeksLabel: ElementFinder;
  dpDaysLabel: ElementFinder;
  dpHoursLabel: ElementFinder;
  dpMinutesLabel: ElementFinder;
  dpSecondsLabel: ElementFinder;

  dpValueContainer: ElementFinder;
  dpSignButton: ElementFinder;
  dpSignButtonIcon: ElementFinder;

  previewFormatInput: ElementFinder;
  dpYearsLabelInput: ElementFinder;
  dpWeeksLabelInput: ElementFinder;
  dpHoursLabelInput: ElementFinder;

  constructor(wrapperSelector: string) {
    this.wrapper = $(wrapperSelector);

    this.durationPicker = this.wrapper.$(DURATION_PICKER);
    this.outputContainer = this.wrapper.$(OUTPUT);
    this.setValueButton = this.wrapper.$(SET_VALUE_BUTTON);
    this.toggleButton = this.wrapper.$(TOGGLE_BUTTON);
    this.touchedStatusContainer = this.wrapper.$(TOUCHED_STATUS);
    this.makeUntouchedButton = this.wrapper.$(MAKE_UNTOUCHED_BUTTON);
    this.toggleNegativeButton = this.wrapper.$(TOGGLE_NEGATIVE_BUTTON);
    this.previewFormatInput = this.wrapper.$(PREVIEW_FORMAT_INPUT);
    this.dpYearsLabelInput = this.wrapper.$(DP_YEARS_LABEL_INPUT);
    this.dpWeeksLabelInput = this.wrapper.$(DP_WEEKS_LABEL_INPUT);
    this.dpHoursLabelInput = this.wrapper.$(DP_HOURS_LABEL_INPUT);

    this.dpYearsArrowUp = this.durationPicker.$(DP_YEARS_ARROW_UP);
    this.dpMonthsArrowUp = this.durationPicker.$(DP_MONTHS_ARROW_UP);
    this.dpWeeksArrowUp = this.durationPicker.$(DP_WEEKS_ARROW_UP);
    this.dpDaysArrowUp = this.durationPicker.$(DP_DAYS_ARROW_UP);
    this.dpHoursArrowUp = this.durationPicker.$(DP_HOURS_ARROW_UP);
    this.dpMinutesArrowUp = this.durationPicker.$(DP_MINUTES_ARROW_UP);
    this.dpSecondsArrowUp = this.durationPicker.$(DP_SECONDS_ARROW_UP);

    this.dpYearsArrowDown = this.durationPicker.$(DP_YEARS_ARROW_DOWN);
    this.dpMonthsArrowDown = this.durationPicker.$(DP_MONTHS_ARROW_DOWN);
    this.dpWeeksArrowDown = this.durationPicker.$(DP_WEEKS_ARROW_DOWN);
    this.dpDaysArrowDown = this.durationPicker.$(DP_DAYS_ARROW_DOWN);
    this.dpHoursArrowDown = this.durationPicker.$(DP_HOURS_ARROW_DOWN);
    this.dpMinutesArrowDown = this.durationPicker.$(DP_MINUTES_ARROW_DOWN);
    this.dpSecondsArrowDown = this.durationPicker.$(DP_SECONDS_ARROW_DOWN);

    this.dpYearsInput = this.durationPicker.$(DP_YEARS_INPUT);
    this.dpMonthsInput = this.durationPicker.$(DP_MONTHS_INPUT);
    this.dpWeeksInput = this.durationPicker.$(DP_WEEKS_INPUT);
    this.dpDaysInput = this.durationPicker.$(DP_DAYS_INPUT);
    this.dpHoursInput = this.durationPicker.$(DP_HOURS_INPUT);
    this.dpMinutesInput = this.durationPicker.$(DP_MINUTES_INPUT);
    this.dpSecondsInput = this.durationPicker.$(DP_SECONDS_INPUT);

    this.dpYearsLabel = this.durationPicker.$(DP_YEARS_LABEL);
    this.dpMonthsLabel = this.durationPicker.$(DP_MONTHS_LABEL);
    this.dpWeeksLabel = this.durationPicker.$(DP_WEEKS_LABEL);
    this.dpDaysLabel = this.durationPicker.$(DP_DAYS_LABEL);
    this.dpHoursLabel = this.durationPicker.$(DP_HOURS_LABEL);
    this.dpMinutesLabel = this.durationPicker.$(DP_MINUTES_LABEL);
    this.dpSecondsLabel = this.durationPicker.$(DP_SECONDS_LABEL);

    this.dpValueContainer = this.durationPicker.$(DP_VALUE);
    this.dpSignButton = this.durationPicker.$(DP_SIGN);
    this.dpSignButtonIcon = this.dpSignButton.$('span');
  }

  navigateTo() {
    return browser.get('/');
  }

}
