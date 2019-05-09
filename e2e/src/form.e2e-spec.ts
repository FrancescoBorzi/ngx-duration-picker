import { WrapperPageObject } from './wrapper.po';
import { REACTIVE_FORM_WRAPPER, TOUCHED_TEXT, UNTOUCHED_TEXT } from './constants';

/* Form-specific checks performed against the "Reactive Form" duration picker */
describe('Reactive Form (form-related checks)', () => {
  let page: WrapperPageObject;

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
