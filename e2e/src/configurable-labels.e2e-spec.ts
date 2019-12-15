import { WrapperPageObject } from './wrapper.po';
import { CONFIGURABLE_LABELS_WRAPPER } from './constants';

/* Specific checks performed against the "Configurable Labels" duration picker */
describe('Configurable Labels (specific checks)', () => {
  const INITIAL_YEARS_LABEL = 'years';
  const UPDATED_YEARS_LABEL = 'lata';
  const INITIAL_WEEKS_LABEL = 'weeks';
  const UPDATED_WEEKS_LABEL = 'tyg';
  const INITIAL_HOURS_LABEL = 'hours';
  const UPDATED_HOURS_LABEL = 'godz';

  let page: WrapperPageObject;

  beforeEach(async () => {
    page = new WrapperPageObject(CONFIGURABLE_LABELS_WRAPPER);
    await page.navigateTo();
  });

  it('should show correct labels', () => {
    expect(page.dpYearsLabel.getText()).toEqual(INITIAL_YEARS_LABEL);
    expect(page.dpMonthsLabel.getText()).toEqual('M');
    expect(page.dpWeeksLabel.getText()).toEqual(INITIAL_WEEKS_LABEL);
    expect(page.dpDaysLabel.getText()).toEqual('D');
    expect(page.dpHoursLabel.getText()).toEqual(INITIAL_HOURS_LABEL);
    expect(page.dpMinutesLabel.getText()).toEqual('M');
    expect(page.dpSecondsLabel.getText()).toEqual('S');
  });

  it('should show updated labels', () => {
    page.dpYearsLabelInput.clear();
    page.dpYearsLabelInput.sendKeys(UPDATED_YEARS_LABEL);
    page.dpWeeksLabelInput.clear();
    page.dpWeeksLabelInput.sendKeys(UPDATED_WEEKS_LABEL);
    page.dpHoursLabelInput.clear();
    page.dpHoursLabelInput.sendKeys(UPDATED_HOURS_LABEL);

    expect(page.dpYearsLabel.getText()).toEqual(UPDATED_YEARS_LABEL);
    expect(page.dpMonthsLabel.getText()).toEqual('M');
    expect(page.dpWeeksLabel.getText()).toEqual(UPDATED_WEEKS_LABEL);
    expect(page.dpDaysLabel.getText()).toEqual('D');
    expect(page.dpHoursLabel.getText()).toEqual(UPDATED_HOURS_LABEL);
    expect(page.dpMinutesLabel.getText()).toEqual('M');
    expect(page.dpSecondsLabel.getText()).toEqual('S');
  });
});
