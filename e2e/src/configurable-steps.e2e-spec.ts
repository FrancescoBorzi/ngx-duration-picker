import { WrapperPageObject } from './wrapper.po';
import { CONFIGURABLE_STEPS_WRAPPER } from './constants';

/* Specific checks performed against the "Configurable Labels" duration picker */
describe('Configurable Steps (specific checks)', () => {
  const INITIAL_YEARS_STEPS = 2;
  const UPDATED_YEARS_STEPS = -2;
  const INITIAL_WEEKS_STEPS = 3;
  const UPDATED_WEEKS_STEPS = 5;
  const INITIAL_HOURS_STEPS = 4;
  const UPDATED_HOURS_STEPS = 0;

  let page: WrapperPageObject;

  beforeEach(async () => {
    page = new WrapperPageObject(CONFIGURABLE_STEPS_WRAPPER);
    await page.navigateTo();
  });

  it('should use initial steps', () => {
    expect(page.dpYearsInput.getAttribute('value')).toEqual('0');
    page.dpYearsArrowUp.click();
    page.dpYearsArrowUp.click();
    expect(page.dpYearsInput.getAttribute('value')).toEqual(`${INITIAL_YEARS_STEPS * 2}`);
    page.dpYearsArrowDown.click();
    expect(page.dpYearsInput.getAttribute('value')).toEqual(`${INITIAL_YEARS_STEPS}`);

    expect(page.dpMonthsInput.getAttribute('value')).toEqual('0');
    page.dpMonthsArrowUp.click();
    page.dpMonthsArrowUp.click();
    expect(page.dpMonthsInput.getAttribute('value')).toEqual('2');
    page.dpMonthsArrowDown.click();
    expect(page.dpMonthsInput.getAttribute('value')).toEqual('1');

    expect(page.dpWeeksInput.getAttribute('value')).toEqual('0');
    page.dpWeeksArrowUp.click();
    page.dpWeeksArrowUp.click();
    expect(page.dpWeeksInput.getAttribute('value')).toEqual(`${INITIAL_WEEKS_STEPS * 2}`);
    page.dpWeeksArrowDown.click();
    expect(page.dpWeeksInput.getAttribute('value')).toEqual(`${INITIAL_WEEKS_STEPS}`);

    expect(page.dpDaysInput.getAttribute('value')).toEqual('0');
    page.dpDaysArrowUp.click();
    page.dpDaysArrowUp.click();
    expect(page.dpDaysInput.getAttribute('value')).toEqual('2');
    page.dpDaysArrowDown.click();
    expect(page.dpDaysInput.getAttribute('value')).toEqual('1');

    expect(page.dpHoursInput.getAttribute('value')).toEqual('0');
    page.dpHoursArrowUp.click();
    page.dpHoursArrowUp.click();
    expect(page.dpHoursInput.getAttribute('value')).toEqual(`${INITIAL_HOURS_STEPS * 2}`);
    page.dpHoursArrowDown.click();
    expect(page.dpHoursInput.getAttribute('value')).toEqual(`${INITIAL_HOURS_STEPS}`);

    expect(page.dpMinutesInput.getAttribute('value')).toEqual('0');
    page.dpMinutesArrowUp.click();
    page.dpMinutesArrowUp.click();
    expect(page.dpMinutesInput.getAttribute('value')).toEqual('2');
    page.dpMinutesArrowDown.click();
    expect(page.dpMinutesInput.getAttribute('value')).toEqual('1');

    expect(page.dpSecondsInput.getAttribute('value')).toEqual('0');
    page.dpSecondsArrowUp.click();
    page.dpSecondsArrowUp.click();
    expect(page.dpSecondsInput.getAttribute('value')).toEqual('2');
    page.dpSecondsArrowDown.click();
    expect(page.dpSecondsInput.getAttribute('value')).toEqual('1');
  });

  it('should use changed steps with replacement of incorrect values', () => {
    page.dpYearsStepsInput.clear();
    page.dpYearsStepsInput.sendKeys(`${UPDATED_YEARS_STEPS}`);
    page.dpWeeksStepsInput.clear();
    page.dpWeeksStepsInput.sendKeys(`${UPDATED_WEEKS_STEPS}`);
    page.dpHoursStepsInput.clear();
    page.dpHoursStepsInput.sendKeys(`${UPDATED_HOURS_STEPS}`);

    expect(page.dpYearsInput.getAttribute('value')).toEqual('0');
    page.dpYearsArrowUp.click();
    page.dpYearsArrowUp.click();
    expect(page.dpYearsInput.getAttribute('value')).toEqual('2');
    page.dpYearsArrowDown.click();
    expect(page.dpYearsInput.getAttribute('value')).toEqual('1');

    expect(page.dpMonthsInput.getAttribute('value')).toEqual('0');
    page.dpMonthsArrowUp.click();
    page.dpMonthsArrowUp.click();
    expect(page.dpMonthsInput.getAttribute('value')).toEqual('2');
    page.dpMonthsArrowDown.click();
    expect(page.dpMonthsInput.getAttribute('value')).toEqual('1');

    expect(page.dpWeeksInput.getAttribute('value')).toEqual('0');
    page.dpWeeksArrowUp.click();
    page.dpWeeksArrowUp.click();
    expect(page.dpWeeksInput.getAttribute('value')).toEqual(`${UPDATED_WEEKS_STEPS * 2}`);
    page.dpWeeksArrowDown.click();
    expect(page.dpWeeksInput.getAttribute('value')).toEqual(`${UPDATED_WEEKS_STEPS}`);

    expect(page.dpDaysInput.getAttribute('value')).toEqual('0');
    page.dpDaysArrowUp.click();
    page.dpDaysArrowUp.click();
    expect(page.dpDaysInput.getAttribute('value')).toEqual('2');
    page.dpDaysArrowDown.click();
    expect(page.dpDaysInput.getAttribute('value')).toEqual('1');

    expect(page.dpHoursInput.getAttribute('value')).toEqual('0');
    page.dpHoursArrowUp.click();
    page.dpHoursArrowUp.click();
    expect(page.dpHoursInput.getAttribute('value')).toEqual('2');
    page.dpHoursArrowDown.click();
    expect(page.dpHoursInput.getAttribute('value')).toEqual('1');

    expect(page.dpMinutesInput.getAttribute('value')).toEqual('0');
    page.dpMinutesArrowUp.click();
    page.dpMinutesArrowUp.click();
    expect(page.dpMinutesInput.getAttribute('value')).toEqual('2');
    page.dpMinutesArrowDown.click();
    expect(page.dpMinutesInput.getAttribute('value')).toEqual('1');

    expect(page.dpSecondsInput.getAttribute('value')).toEqual('0');
    page.dpSecondsArrowUp.click();
    page.dpSecondsArrowUp.click();
    expect(page.dpSecondsInput.getAttribute('value')).toEqual('2');
    page.dpSecondsArrowDown.click();
    expect(page.dpSecondsInput.getAttribute('value')).toEqual('1');
  });
});
