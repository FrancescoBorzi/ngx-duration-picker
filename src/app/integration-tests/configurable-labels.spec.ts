import { PageObject } from './page-object';
import { CONFIGURABLE_LABELS_WRAPPER } from './constants';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';

/* Specific checks performed against the "Configurable Labels" duration picker */
describe('Configurable Labels (specific checks)', () => {
  const INITIAL_YEARS_LABEL = 'years';
  const UPDATED_YEARS_LABEL = 'lata';
  const INITIAL_WEEKS_LABEL = 'weeks';
  const UPDATED_WEEKS_LABEL = 'tyg';
  const INITIAL_HOURS_LABEL = 'hours';
  const UPDATED_HOURS_LABEL = 'godz';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = new PageObject(fixture, CONFIGURABLE_LABELS_WRAPPER);
    return { page };
  };

  it('should show correct labels', () => {
    const { page } = setup();
    expect(page.dpYearsLabel.innerText).toEqual(INITIAL_YEARS_LABEL);
    expect(page.dpMonthsLabel.innerText).toEqual('M');
    expect(page.dpWeeksLabel.innerText).toEqual(INITIAL_WEEKS_LABEL);
    expect(page.dpDaysLabel.innerText).toEqual('D');
    expect(page.dpHoursLabel.innerText).toEqual(INITIAL_HOURS_LABEL);
    expect(page.dpMinutesLabel.innerText).toEqual('M');
    expect(page.dpSecondsLabel.innerText).toEqual('S');
  });

  it('should show updated labels', () => {
    const { page } = setup();
    page.clear(page.dpYearsLabelInput);
    page.setInputValue(page.dpYearsLabelInput, UPDATED_YEARS_LABEL);
    page.clear(page.dpWeeksLabelInput);
    page.setInputValue(page.dpWeeksLabelInput, UPDATED_WEEKS_LABEL);
    page.clear(page.dpHoursLabelInput);
    page.setInputValue(page.dpHoursLabelInput, UPDATED_HOURS_LABEL);

    expect(page.dpYearsLabel.innerText).toEqual(UPDATED_YEARS_LABEL);
    expect(page.dpMonthsLabel.innerText).toEqual('M');
    expect(page.dpWeeksLabel.innerText).toEqual(UPDATED_WEEKS_LABEL);
    expect(page.dpDaysLabel.innerText).toEqual('D');
    expect(page.dpHoursLabel.innerText).toEqual(UPDATED_HOURS_LABEL);
    expect(page.dpMinutesLabel.innerText).toEqual('M');
    expect(page.dpSecondsLabel.innerText).toEqual('S');
  });
});
