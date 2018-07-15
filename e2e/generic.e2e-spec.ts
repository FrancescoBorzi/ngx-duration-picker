import { WrapperPageObject } from './wrapper.po';
import { PLAIN_BINDING_WRAPPER, REACTIVE_FORM_WRAPPER } from './constants';

/* Generic checks performed against the "Plain binding" and the "Reactive Form" duration pickers */

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
