import { WrapperPageObject } from './wrapper.po';
import { NEGATIVE_DURATION_WRAPPER, PLAIN_BINDING_WRAPPER, REACTIVE_FORM_WRAPPER, TOUCHED_TEXT, UNTOUCHED_TEXT } from './constants';

describe('ngx-duration-picker', () => {
  let page: WrapperPageObject;

  [
    { selector: PLAIN_BINDING_WRAPPER, title: 'Plain Binding'},
    { selector: REACTIVE_FORM_WRAPPER, title: 'Reactive Form'},
  ].forEach(({ selector, title }) => {

    describe(`${title} (generic checks)`, () => {
      beforeEach(() => {
        page = new WrapperPageObject(selector);
        page.navigateTo();
      });

      it('should contain the DurationPicker element', () => {
        expect(page.durationPicker.isPresent()).toBe(true);
      });

      it('toggle Disable should correctly work', () => {
        page.toggleButton.click();

        expect(page.dpYearsArrowUp.getAttribute('class')).toContain('disabled');
        expect(page.dpMonthsArrowUp.getAttribute('class')).toContain('disabled');
        expect(page.dpWeeksArrowUp.getAttribute('class')).toContain('disabled');
        expect(page.dpDaysArrowUp.getAttribute('class')).toContain('disabled');
        expect(page.dpHoursArrowUp.getAttribute('class')).toContain('disabled');
        expect(page.dpMinutesArrowUp.getAttribute('class')).toContain('disabled');
        expect(page.dpSecondsArrowUp.getAttribute('class')).toContain('disabled');
        expect(page.dpYearsArrowDown.getAttribute('class')).toContain('disabled');
        expect(page.dpMonthsArrowDown.getAttribute('class')).toContain('disabled');
        expect(page.dpWeeksArrowDown.getAttribute('class')).toContain('disabled');
        expect(page.dpDaysArrowDown.getAttribute('class')).toContain('disabled');
        expect(page.dpHoursArrowDown.getAttribute('class')).toContain('disabled');
        expect(page.dpMinutesArrowDown.getAttribute('class')).toContain('disabled');
        expect(page.dpSecondsArrowDown.getAttribute('class')).toContain('disabled');

        expect(page.dpYearsInput.getAttribute('disabled')).toBeTruthy();
        expect(page.dpMonthsInput.getAttribute('disabled')).toBeTruthy();
        expect(page.dpWeeksInput.getAttribute('disabled')).toBeTruthy();
        expect(page.dpDaysInput.getAttribute('disabled')).toBeTruthy();
        expect(page.dpHoursInput.getAttribute('disabled')).toBeTruthy();
        expect(page.dpMinutesInput.getAttribute('disabled')).toBeTruthy();
        expect(page.dpSecondsInput.getAttribute('disabled')).toBeTruthy();
      });

      it('toggle Enable should correctly work', () => {
        page.toggleButton.click();
        page.toggleButton.click();

        expect(page.dpYearsArrowUp.getAttribute('class')).not.toContain('disabled');
        expect(page.dpMonthsArrowUp.getAttribute('class')).not.toContain('disabled');
        expect(page.dpWeeksArrowUp.getAttribute('class')).not.toContain('disabled');
        expect(page.dpDaysArrowUp.getAttribute('class')).not.toContain('disabled');
        expect(page.dpHoursArrowUp.getAttribute('class')).not.toContain('disabled');
        expect(page.dpMinutesArrowUp.getAttribute('class')).not.toContain('disabled');
        expect(page.dpSecondsArrowUp.getAttribute('class')).not.toContain('disabled');
        expect(page.dpYearsArrowDown.getAttribute('class')).not.toContain('disabled');
        expect(page.dpMonthsArrowDown.getAttribute('class')).not.toContain('disabled');
        expect(page.dpWeeksArrowDown.getAttribute('class')).not.toContain('disabled');
        expect(page.dpDaysArrowDown.getAttribute('class')).not.toContain('disabled');
        expect(page.dpHoursArrowDown.getAttribute('class')).not.toContain('disabled');
        expect(page.dpMinutesArrowDown.getAttribute('class')).not.toContain('disabled');
        expect(page.dpSecondsArrowDown.getAttribute('class')).not.toContain('disabled');

        expect(page.dpYearsInput.getAttribute('disabled')).toBeFalsy();
        expect(page.dpMonthsInput.getAttribute('disabled')).toBeFalsy();
        expect(page.dpWeeksInput.getAttribute('disabled')).toBeFalsy();
        expect(page.dpDaysInput.getAttribute('disabled')).toBeFalsy();
        expect(page.dpHoursInput.getAttribute('disabled')).toBeFalsy();
        expect(page.dpMinutesInput.getAttribute('disabled')).toBeFalsy();
        expect(page.dpSecondsInput.getAttribute('disabled')).toBeFalsy();
      });

      it('pushing the "set to value" button should correctly work', () => {
        page.setValueButton.click();

        expect(page.outputContainer.getText()).toBe('P7Y3M2W4DT1H3M5S');
        expect(page.dpYearsInput.getAttribute('value')).toBe('7');
        expect(page.dpMonthsInput.getAttribute('value')).toBe('3');
        expect(page.dpWeeksInput.getAttribute('value')).toBe('2');
        expect(page.dpDaysInput.getAttribute('value')).toBe('4');
        expect(page.dpHoursInput.getAttribute('value')).toBe('1');
        expect(page.dpMinutesInput.getAttribute('value')).toBe('3');
        expect(page.dpSecondsInput.getAttribute('value')).toBe('5');
      });

      it('manually setting the duration value using inputs should correctly work', () => {
        page.dpYearsInput.clear();
        page.dpYearsInput.sendKeys('1');
        expect(page.outputContainer.getText()).toBe('P1Y');
        expect(page.dpValueContainer.getText()).toBe('P1Y');

        page.dpMonthsInput.clear();
        page.dpMonthsInput.sendKeys('2');
        expect(page.outputContainer.getText()).toBe('P1Y2M');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M');

        page.dpWeeksInput.clear();
        page.dpWeeksInput.sendKeys('3');
        expect(page.outputContainer.getText()).toBe('P1Y2M3W');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W');

        page.dpDaysInput.clear();
        page.dpDaysInput.sendKeys('4');
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4D');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4D');

        page.dpHoursInput.clear();
        page.dpHoursInput.sendKeys('5');
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4DT5H');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4DT5H');

        page.dpMinutesInput.clear();
        page.dpMinutesInput.sendKeys('6');
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4DT5H6M');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4DT5H6M');

        page.dpSecondsInput.clear();
        page.dpSecondsInput.sendKeys('7');
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4DT5H6M7S');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4DT5H6M7S');

        page.dpYearsInput.clear();
        page.dpMonthsInput.clear();
        page.dpWeeksInput.clear();
        page.dpDaysInput.clear();
        page.dpHoursInput.clear();
        page.dpMinutesInput.clear();
        page.dpSecondsInput.clear();
        expect(page.outputContainer.getText()).toBe('PT0S');
        expect(page.dpValueContainer.getText()).toBe('PT0S');
      });

      it('manually setting the duration value using arrows should correctly work', () => {
        page.dpYearsArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P1Y');
        expect(page.dpValueContainer.getText()).toBe('P1Y');

        page.dpYearsArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P2Y');
        expect(page.dpValueContainer.getText()).toBe('P2Y');

        page.dpYearsArrowDown.click();
        expect(page.outputContainer.getText()).toBe('P1Y');
        expect(page.dpValueContainer.getText()).toBe('P1Y');

        page.dpMonthsArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P1Y1M');
        expect(page.dpValueContainer.getText()).toBe('P1Y1M');

        page.dpYearsArrowDown.click();
        expect(page.outputContainer.getText()).toBe('P1M');
        expect(page.dpValueContainer.getText()).toBe('P1M');

        page.dpYearsArrowDown.click();
        expect(page.outputContainer.getText()).toBe('P1M');
        expect(page.dpValueContainer.getText()).toBe('P1M');

        page.dpYearsArrowUp.click();
        page.dpYearsArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P2Y1M');
        expect(page.dpValueContainer.getText()).toBe('P2Y1M');

        page.dpYearsArrowDown.click();
        page.dpMonthsArrowUp.click();
        page.dpWeeksArrowUp.click();
        page.dpWeeksArrowUp.click();
        page.dpWeeksArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P1Y2M3W');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W');

        page.dpWeeksArrowDown.click();
        expect(page.outputContainer.getText()).toBe('P1Y2M2W');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M2W');

        page.dpWeeksArrowUp.click();
        page.dpDaysArrowUp.click();
        page.dpDaysArrowUp.click();
        page.dpDaysArrowUp.click();
        page.dpDaysArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4D');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4D');

        page.dpHoursArrowUp.click();
        page.dpHoursArrowUp.click();
        page.dpHoursArrowUp.click();
        page.dpHoursArrowUp.click();
        page.dpHoursArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4DT5H');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4DT5H');

        page.dpMinutesArrowUp.click();
        page.dpMinutesArrowUp.click();
        page.dpMinutesArrowUp.click();
        page.dpMinutesArrowUp.click();
        page.dpMinutesArrowUp.click();
        page.dpMinutesArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4DT5H6M');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4DT5H6M');

        page.dpSecondsArrowUp.click();
        page.dpSecondsArrowUp.click();
        page.dpSecondsArrowUp.click();
        page.dpSecondsArrowUp.click();
        page.dpSecondsArrowUp.click();
        page.dpSecondsArrowUp.click();
        page.dpSecondsArrowUp.click();
        expect(page.outputContainer.getText()).toBe('P1Y2M3W4DT5H6M7S');
        expect(page.dpValueContainer.getText()).toBe('P1Y2M3W4DT5H6M7S');
      });
    });

  });

  describe('Reactive Form (form-related checks)', () => {
    beforeEach(() => {
      page = new WrapperPageObject(REACTIVE_FORM_WRAPPER);
      page.navigateTo();
    });

    it('the form should initially be untouched', () => {
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);
    });

    it('touching any arrow should mark the form as touched', () => {
      page.dpYearsArrowUp.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpMonthsArrowUp.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpWeeksArrowUp.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpDaysArrowUp.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpHoursArrowUp.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpMinutesArrowUp.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpSecondsArrowUp.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpYearsArrowDown.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpMonthsArrowDown.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpWeeksArrowDown.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpDaysArrowDown.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpHoursArrowDown.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpMinutesArrowDown.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpSecondsArrowDown.click();
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);
    });

    it('changing any input should mark the form as touched', () => {
      page.dpYearsInput.sendKeys('1');
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpMonthsInput.sendKeys('1');
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpWeeksInput.sendKeys('1');
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpDaysInput.sendKeys('1');
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpHoursInput.sendKeys('1');
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpMinutesInput.sendKeys('1');
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

      page.dpSecondsInput.sendKeys('1');
      expect(page.touchedStatusContainer.getText()).toBe(TOUCHED_TEXT);

      page.makeUntouchedButton.click();
      expect(page.touchedStatusContainer.getText()).toBe(UNTOUCHED_TEXT);

    });
  });

  describe('Negative Duration (specific checks)', () => {
    beforeEach(() => {
      page = new WrapperPageObject(NEGATIVE_DURATION_WRAPPER);
      page.navigateTo();
    });

    it('the plus sign should be initially there', () => {
      expect(page.dpSignButton.isPresent()).toBe(true);
      expect(page.dpSignButtonIcon.getAttribute('class')).toContain('glyphicon-plus');
      expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('glyphicon-minus');
    });

    it('pushing the "set to value" button should correctly work', () => {
      page.setValueButton.click();

      expect(page.dpSignButtonIcon.getAttribute('class')).toContain('glyphicon-minus');
      expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('glyphicon-plus');
      expect(page.outputContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');
      expect(page.dpValueContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');
      expect(page.dpYearsInput.getAttribute('value')).toBe('7');
      expect(page.dpMonthsInput.getAttribute('value')).toBe('3');
      expect(page.dpWeeksInput.getAttribute('value')).toBe('2');
      expect(page.dpDaysInput.getAttribute('value')).toBe('4');
      expect(page.dpHoursInput.getAttribute('value')).toBe('1');
      expect(page.dpMinutesInput.getAttribute('value')).toBe('3');
      expect(page.dpSecondsInput.getAttribute('value')).toBe('5');
    });

    it('pushing the sign button should correctly change the sign', () => {
      page.setValueButton.click();

      page.dpSignButton.click();

      expect(page.dpSignButtonIcon.getAttribute('class')).toContain('glyphicon-plus');
      expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('glyphicon-minus');
      expect(page.outputContainer.getText()).toBe('P7Y3M2W4DT1H3M5S');
      expect(page.dpValueContainer.getText()).toBe('P7Y3M2W4DT1H3M5S');

      page.dpSignButton.click();

      expect(page.dpSignButtonIcon.getAttribute('class')).toContain('glyphicon-minus');
      expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('glyphicon-plus');
      expect(page.outputContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');
      expect(page.dpValueContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');
    });

    it('pushing the toggle negative durations button should only hide sign, without changing the value', () => {
      page.setValueButton.click();

      page.toggleNegativeButton.click();

      expect(page.dpSignButton.isPresent()).toBe(false);
      expect(page.outputContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');
      expect(page.dpValueContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');

      page.toggleNegativeButton.click();

      expect(page.dpSignButton.isPresent()).toBe(true);
      expect(page.outputContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');
      expect(page.dpValueContainer.getText()).toBe('-P7Y3M2W4DT1H3M5S');
    });
  });
});
