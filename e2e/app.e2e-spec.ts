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

      it('Toggle Enable/Disable should correctly work', () => {
        page.toggleButton.click();

        expect(page.dpYearsArrowUp.getAttribute('disabled')).toBe('disabled');
        expect(page.dpMonthsArrowUp.getAttribute('disabled')).toBe('disabled');
        expect(page.dpWeeksArrowUp.getAttribute('disabled')).toBe('disabled');
        expect(page.dpDaysArrowUp.getAttribute('disabled')).toBe('disabled');
        expect(page.dpHoursArrowUp.getAttribute('disabled')).toBe('disabled');
        expect(page.dpMinutesArrowUp.getAttribute('disabled')).toBe('disabled');
        expect(page.dpSecondsArrowUp.getAttribute('disabled')).toBe('disabled');
        expect(page.dpYearsArrowDown.getAttribute('disabled')).toBe('disabled');
        expect(page.dpMonthsArrowDown.getAttribute('disabled')).toBe('disabled');
        expect(page.dpWeeksArrowDown.getAttribute('disabled')).toBe('disabled');
        expect(page.dpDaysArrowDown.getAttribute('disabled')).toBe('disabled');
        expect(page.dpHoursArrowDown.getAttribute('disabled')).toBe('disabled');
        expect(page.dpMinutesArrowDown.getAttribute('disabled')).toBe('disabled');
        expect(page.dpSecondsArrowDown.getAttribute('disabled')).toBe('disabled');
        expect(page.dpYearsInput.getAttribute('disabled')).toBe('disabled');
        expect(page.dpMonthsInput.getAttribute('disabled')).toBe('disabled');
        expect(page.dpWeeksInput.getAttribute('disabled')).toBe('disabled');
        expect(page.dpDaysInput.getAttribute('disabled')).toBe('disabled');
        expect(page.dpHoursInput.getAttribute('disabled')).toBe('disabled');
        expect(page.dpMinutesInput.getAttribute('disabled')).toBe('disabled');
        expect(page.dpSecondsInput.getAttribute('disabled')).toBe('disabled');
      });
    });

  });

});
