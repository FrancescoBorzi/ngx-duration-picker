import { WrapperPageObject } from './wrapper.po';
import { NEGATIVE_DURATION_WRAPPER } from './constants';


/* Specific checks performed against the "Negative Duration" duration picker */
describe('Negative Duration (specific checks)', () => {
  let page: WrapperPageObject;

  beforeEach(() => {
    page = new WrapperPageObject(NEGATIVE_DURATION_WRAPPER);
    page.navigateTo();
  });

  it('the plus sign should be initially there', () => {
    expect(page.dpSignButton.isPresent()).toBe(true);
    expect(page.dpSignButtonIcon.getAttribute('class')).toContain('bs-icon-plus');
    expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('bs-icon-minus');
  });

  it('pushing the "set to value" button should correctly work', () => {
    page.setValueButton.click();

    expect(page.dpSignButtonIcon.getAttribute('class')).toContain('bs-icon-minus');
    expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('bs-icon-plus');
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

    expect(page.dpSignButtonIcon.getAttribute('class')).toContain('bs-icon-plus');
    expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('bs-icon-minus');
    expect(page.outputContainer.getText()).toBe('P7Y3M2W4DT1H3M5S');
    expect(page.dpValueContainer.getText()).toBe('P7Y3M2W4DT1H3M5S');

    page.dpSignButton.click();

    expect(page.dpSignButtonIcon.getAttribute('class')).toContain('bs-icon-minus');
    expect(page.dpSignButtonIcon.getAttribute('class')).not.toContain('bs-icon-plus');
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
