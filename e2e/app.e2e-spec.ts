import { WrapperPageObject } from './wrapper.po';
import { NEGATIVE_DURATION_WRAPPER, PLAIN_BINDING_WRAPPER, REACTIVE_FORM_WRAPPER } from './constants';

describe('ngx-duration-picker', () => {
  let page: WrapperPageObject;

  [
    { selector: PLAIN_BINDING_WRAPPER, title: 'Plain Binding'},
    { selector: REACTIVE_FORM_WRAPPER, title: 'Reactive Form Wrapper'},
  ].forEach(({ selector, title }) => {

    describe(title, () => {
      beforeEach(() => {
        page = new WrapperPageObject(selector);
        page.navigateTo();
      });

      it('should contain the DurationPicker element', () => {
        expect(page.durationPicker.isPresent()).toBe(true);
      });

      it('Toggle disable should correctly work', () => {
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

      it('Toggle enable should correctly work', () => {
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
    });

  });

});
