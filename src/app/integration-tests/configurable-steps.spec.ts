import { PageObject } from './page-object';
import { CONFIGURABLE_STEPS_WRAPPER } from './constants';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

/* Specific checks performed against the "Configurable Labels" duration picker */
describe('Configurable Steps (specific checks)', () => {
  const INITIAL_YEARS_STEPS = 2;
  const UPDATED_YEARS_STEPS = -2;
  const INITIAL_WEEKS_STEPS = 3;
  const UPDATED_WEEKS_STEPS = 5;
  const INITIAL_HOURS_STEPS = 4;
  const UPDATED_HOURS_STEPS = 0;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = new PageObject(fixture, CONFIGURABLE_STEPS_WRAPPER);
    return { page };
  };

  it('should use initial steps', async () => {
    const { page } = setup();
    await page.whenStable();
    expect(page.dpYearsInput.value).toEqual('0');
    page.clickElement(page.dpYearsArrowUp);
    page.clickElement(page.dpYearsArrowUp);
    await page.whenStable();
    expect(page.dpYearsInput.value).toEqual(`${INITIAL_YEARS_STEPS * 2}`);
    page.clickElement(page.dpYearsArrowDown);
    await page.whenStable();
    expect(page.dpYearsInput.value).toEqual(`${INITIAL_YEARS_STEPS}`);

    await page.whenStable();
    expect(page.dpMonthsInput.value).toEqual('0');
    page.clickElement(page.dpMonthsArrowUp);
    page.clickElement(page.dpMonthsArrowUp);
    await page.whenStable();
    expect(page.dpMonthsInput.value).toEqual('2');
    page.clickElement(page.dpMonthsArrowDown);
    await page.whenStable();
    expect(page.dpMonthsInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpWeeksInput.value).toEqual('0');
    page.clickElement(page.dpWeeksArrowUp);
    page.clickElement(page.dpWeeksArrowUp);
    await page.whenStable();
    expect(page.dpWeeksInput.value).toEqual(`${INITIAL_WEEKS_STEPS * 2}`);
    page.clickElement(page.dpWeeksArrowDown);
    await page.whenStable();
    expect(page.dpWeeksInput.value).toEqual(`${INITIAL_WEEKS_STEPS}`);

    await page.whenStable();
    expect(page.dpDaysInput.value).toEqual('0');
    page.clickElement(page.dpDaysArrowUp);
    page.clickElement(page.dpDaysArrowUp);
    await page.whenStable();
    expect(page.dpDaysInput.value).toEqual('2');
    page.clickElement(page.dpDaysArrowDown);
    await page.whenStable();
    expect(page.dpDaysInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpHoursInput.value).toEqual('0');
    page.clickElement(page.dpHoursArrowUp);
    page.clickElement(page.dpHoursArrowUp);
    await page.whenStable();
    expect(page.dpHoursInput.value).toEqual(`${INITIAL_HOURS_STEPS * 2}`);
    page.clickElement(page.dpHoursArrowDown);
    await page.whenStable();
    expect(page.dpHoursInput.value).toEqual(`${INITIAL_HOURS_STEPS}`);

    await page.whenStable();
    expect(page.dpMinutesInput.value).toEqual('0');
    page.clickElement(page.dpMinutesArrowUp);
    page.clickElement(page.dpMinutesArrowUp);
    await page.whenStable();
    expect(page.dpMinutesInput.value).toEqual('2');
    page.clickElement(page.dpMinutesArrowDown);
    await page.whenStable();
    expect(page.dpMinutesInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpSecondsInput.value).toEqual('0');
    page.clickElement(page.dpSecondsArrowUp);
    page.clickElement(page.dpSecondsArrowUp);
    await page.whenStable();
    expect(page.dpSecondsInput.value).toEqual('2');
    page.clickElement(page.dpSecondsArrowDown);
    await page.whenStable();
    expect(page.dpSecondsInput.value).toEqual('1');
  });

  it('should use changed steps with replacement of incorrect values', async () => {
    const { page } = setup();
    page.clear(page.dpYearsStepsInput);
    page.setInputValue(page.dpYearsStepsInput, `${UPDATED_YEARS_STEPS}`);
    page.clear(page.dpWeeksStepsInput);
    page.setInputValue(page.dpWeeksStepsInput, `${UPDATED_WEEKS_STEPS}`);
    page.clear(page.dpHoursStepsInput);
    page.setInputValue(page.dpHoursStepsInput, (`${UPDATED_HOURS_STEPS}`));

    await page.whenStable();
    expect(page.dpYearsInput.value).toEqual('0');
    page.clickElement(page.dpYearsArrowUp);
    page.clickElement(page.dpYearsArrowUp);
    await page.whenStable();
    expect(page.dpYearsInput.value).toEqual('2');
    page.clickElement(page.dpYearsArrowDown);
    await page.whenStable();
    expect(page.dpYearsInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpMonthsInput.value).toEqual('0');
    page.clickElement(page.dpMonthsArrowUp);
    page.clickElement(page.dpMonthsArrowUp);
    await page.whenStable();
    expect(page.dpMonthsInput.value).toEqual('2');
    page.clickElement(page.dpMonthsArrowDown);
    await page.whenStable();
    expect(page.dpMonthsInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpWeeksInput.value).toEqual('0');
    page.clickElement(page.dpWeeksArrowUp);
    page.clickElement(page.dpWeeksArrowUp);
    await page.whenStable();
    expect(page.dpWeeksInput.value).toEqual(`${UPDATED_WEEKS_STEPS * 2}`);
    page.clickElement(page.dpWeeksArrowDown);
    await page.whenStable();
    expect(page.dpWeeksInput.value).toEqual(`${UPDATED_WEEKS_STEPS}`);

    await page.whenStable();
    expect(page.dpDaysInput.value).toEqual('0');
    page.clickElement(page.dpDaysArrowUp);
    page.clickElement(page.dpDaysArrowUp);
    await page.whenStable();
    expect(page.dpDaysInput.value).toEqual('2');
    page.clickElement(page.dpDaysArrowDown);
    await page.whenStable();
    expect(page.dpDaysInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpHoursInput.value).toEqual('0');
    page.clickElement(page.dpHoursArrowUp);
    page.clickElement(page.dpHoursArrowUp);
    await page.whenStable();
    expect(page.dpHoursInput.value).toEqual('2');
    page.clickElement(page.dpHoursArrowDown);
    await page.whenStable();
    expect(page.dpHoursInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpMinutesInput.value).toEqual('0');
    page.clickElement(page.dpMinutesArrowUp);
    page.clickElement(page.dpMinutesArrowUp);
    await page.whenStable();
    expect(page.dpMinutesInput.value).toEqual('2');
    page.clickElement(page.dpMinutesArrowDown);
    await page.whenStable();
    expect(page.dpMinutesInput.value).toEqual('1');

    await page.whenStable();
    expect(page.dpSecondsInput.value).toEqual('0');
    page.clickElement(page.dpSecondsArrowUp);
    page.clickElement(page.dpSecondsArrowUp);
    await page.whenStable();
    expect(page.dpSecondsInput.value).toEqual('2');
    page.clickElement(page.dpSecondsArrowDown);
    await page.whenStable();
    expect(page.dpSecondsInput.value).toEqual('1');
  });
});
