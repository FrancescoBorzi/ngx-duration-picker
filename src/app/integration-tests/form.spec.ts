import { PageObject } from './page-object';
import { REACTIVE_FORM_WRAPPER, TOUCHED_TEXT, UNTOUCHED_TEXT } from './constants';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';

/* Form-specific checks performed against the "Reactive Form" duration picker */
describe('Reactive Form (form-related checks)', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = new PageObject(fixture, REACTIVE_FORM_WRAPPER);
    return { page };
  };

  it('the form should initially be untouched', () => {
    const { page } = setup();
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);
  });

  it('touching any arrow should mark the form as touched', () => {
    const { page } = setup();
    page.clickElement(page.dpYearsArrowUp);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpMonthsArrowUp);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpWeeksArrowUp);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpDaysArrowUp);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpHoursArrowUp);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpMinutesArrowUp);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpSecondsArrowUp);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpYearsArrowDown);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpMonthsArrowDown);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpWeeksArrowDown);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpDaysArrowDown);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpHoursArrowDown);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpMinutesArrowDown);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.clickElement(page.dpSecondsArrowDown);
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);
  });

  it('changing any input should mark the form as touched', () => {
    const { page } = setup();
    page.setInputValue(page.dpYearsInput, '1');
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.setInputValue(page.dpMonthsInput, '1');
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.setInputValue(page.dpWeeksInput, '1');
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.setInputValue(page.dpDaysInput, '1');
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.setInputValue(page.dpHoursInput, '1');
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.setInputValue(page.dpMinutesInput, '1');
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

    page.setInputValue(page.dpSecondsInput, '1');
    expect(page.touchedStatusContainer.innerText).toBe(TOUCHED_TEXT);

    page.clickElement(page.makeUntouchedButton);
    expect(page.touchedStatusContainer.innerText).toBe(UNTOUCHED_TEXT);

  });
});
