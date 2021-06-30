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

  it('should use initial steps', () => {
    const { page } = setup();
    expect(page.dpYearsInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpYearsArrowUp);
    page.clickElement(page.dpYearsArrowUp);
    expect(page.dpYearsInput.getAttribute('ng-reflect-model')).toEqual(`${INITIAL_YEARS_STEPS * 2}`);
    page.clickElement(page.dpYearsArrowDown);
    expect(page.dpYearsInput.getAttribute('ng-reflect-model')).toEqual(`${INITIAL_YEARS_STEPS}`);

    expect(page.dpMonthsInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpMonthsArrowUp);
    page.clickElement(page.dpMonthsArrowUp);
    expect(page.dpMonthsInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpMonthsArrowDown);
    expect(page.dpMonthsInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpWeeksInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpWeeksArrowUp);
    page.clickElement(page.dpWeeksArrowUp);
    expect(page.dpWeeksInput.getAttribute('ng-reflect-model')).toEqual(`${INITIAL_WEEKS_STEPS * 2}`);
    page.clickElement(page.dpWeeksArrowDown);
    expect(page.dpWeeksInput.getAttribute('ng-reflect-model')).toEqual(`${INITIAL_WEEKS_STEPS}`);

    expect(page.dpDaysInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpDaysArrowUp);
    page.clickElement(page.dpDaysArrowUp);
    expect(page.dpDaysInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpDaysArrowDown);
    expect(page.dpDaysInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpHoursInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpHoursArrowUp);
    page.clickElement(page.dpHoursArrowUp);
    expect(page.dpHoursInput.getAttribute('ng-reflect-model')).toEqual(`${INITIAL_HOURS_STEPS * 2}`);
    page.clickElement(page.dpHoursArrowDown);
    expect(page.dpHoursInput.getAttribute('ng-reflect-model')).toEqual(`${INITIAL_HOURS_STEPS}`);

    expect(page.dpMinutesInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpMinutesArrowUp);
    page.clickElement(page.dpMinutesArrowUp);
    expect(page.dpMinutesInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpMinutesArrowDown);
    expect(page.dpMinutesInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpSecondsInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpSecondsArrowUp);
    page.clickElement(page.dpSecondsArrowUp);
    expect(page.dpSecondsInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpSecondsArrowDown);
    expect(page.dpSecondsInput.getAttribute('ng-reflect-model')).toEqual('1');
  });

  it('should use changed steps with replacement of incorrect values', () => {
    const { page } = setup();
    page.clear(page.dpYearsStepsInput);
    page.setInputValue(page.dpYearsStepsInput, `${UPDATED_YEARS_STEPS}`);
    page.clear(page.dpWeeksStepsInput);
    page.setInputValue(page.dpWeeksStepsInput, `${UPDATED_WEEKS_STEPS}`);
    page.clear(page.dpHoursStepsInput);
    page.setInputValue(page.dpHoursStepsInput, (`${UPDATED_HOURS_STEPS}`));

    expect(page.dpYearsInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpYearsArrowUp);
    page.clickElement(page.dpYearsArrowUp);
    expect(page.dpYearsInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpYearsArrowDown);
    expect(page.dpYearsInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpMonthsInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpMonthsArrowUp);
    page.clickElement(page.dpMonthsArrowUp);
    expect(page.dpMonthsInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpMonthsArrowDown);
    expect(page.dpMonthsInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpWeeksInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpWeeksArrowUp);
    page.clickElement(page.dpWeeksArrowUp);
    expect(page.dpWeeksInput.getAttribute('ng-reflect-model')).toEqual(`${UPDATED_WEEKS_STEPS * 2}`);
    page.clickElement(page.dpWeeksArrowDown);
    expect(page.dpWeeksInput.getAttribute('ng-reflect-model')).toEqual(`${UPDATED_WEEKS_STEPS}`);

    expect(page.dpDaysInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpDaysArrowUp);
    page.clickElement(page.dpDaysArrowUp);
    expect(page.dpDaysInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpDaysArrowDown);
    expect(page.dpDaysInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpHoursInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpHoursArrowUp);
    page.clickElement(page.dpHoursArrowUp);
    expect(page.dpHoursInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpHoursArrowDown);
    expect(page.dpHoursInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpMinutesInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpMinutesArrowUp);
    page.clickElement(page.dpMinutesArrowUp);
    expect(page.dpMinutesInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpMinutesArrowDown);
    expect(page.dpMinutesInput.getAttribute('ng-reflect-model')).toEqual('1');

    expect(page.dpSecondsInput.getAttribute('ng-reflect-model')).toEqual('0');
    page.clickElement(page.dpSecondsArrowUp);
    page.clickElement(page.dpSecondsArrowUp);
    expect(page.dpSecondsInput.getAttribute('ng-reflect-model')).toEqual('2');
    page.clickElement(page.dpSecondsArrowDown);
    expect(page.dpSecondsInput.getAttribute('ng-reflect-model')).toEqual('1');
  });
});
