import { PageObject } from './page-object';
import { NEGATIVE_DURATION_WRAPPER } from './constants';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';


/* Specific checks performed against the "Negative Duration" duration picker */
describe('Negative Duration (specific checks)', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = new PageObject(fixture, NEGATIVE_DURATION_WRAPPER);
    return { page };
  };

  it('the plus sign should be initially there', () => {
    const { page } = setup();

    expect(page.dpSignButton).toBeTruthy();
    expect(page.dpSignButtonIcon.classList.toString()).toContain('bs-icon-plus');
    expect(page.dpSignButtonIcon.classList.toString()).not.toContain('bs-icon-minus');
  });

  it('pushing the "set to value" button should correctly work', async () => {
    const { page } = setup();

    page.clickElement(page.setValueButton);
    await page.whenStable();

    expect(page.dpSignButtonIcon.classList.toString()).toContain('bs-icon-minus');
    expect(page.dpSignButtonIcon.classList.toString()).not.toContain('bs-icon-plus');
    expect(page.outputContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');
    expect(page.dpValueContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');
    expect(page.dpYearsInput.value).toBe('7');
    expect(page.dpMonthsInput.value).toBe('3');
    expect(page.dpWeeksInput.value).toBe('2');
    expect(page.dpDaysInput.value).toBe('4');
    expect(page.dpHoursInput.value).toBe('1');
    expect(page.dpMinutesInput.value).toBe('3');
    expect(page.dpSecondsInput.value).toBe('5');
  });

  it('pushing the sign button should correctly change the sign', () => {
    const { page } = setup();

    page.clickElement(page.setValueButton);
    page.clickElement(page.dpSignButton);

    expect(page.dpSignButtonIcon.classList.toString()).toContain('bs-icon-plus');
    expect(page.dpSignButtonIcon.classList.toString()).not.toContain('bs-icon-minus');
    expect(page.outputContainer.innerText).toBe('P7Y3M2W4DT1H3M5S');
    expect(page.dpValueContainer.innerText).toBe('P7Y3M2W4DT1H3M5S');

    page.clickElement(page.dpSignButton);

    expect(page.dpSignButtonIcon.classList.toString()).toContain('bs-icon-minus');
    expect(page.dpSignButtonIcon.classList.toString()).not.toContain('bs-icon-plus');
    expect(page.outputContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');
    expect(page.dpValueContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');
  });

  it('pushing the toggle negative durations button should only hide sign, without changing the value',  () => {
    const { page } = setup();

    page.clickElement(page.setValueButton);
    page.clickElement(page.toggleNegativeButton);

    expect(page.dpSignButton).toBeFalsy();
    expect(page.outputContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');
    expect(page.dpValueContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');

    page.clickElement(page.toggleNegativeButton);

    expect(page.dpSignButton).toBeTruthy();
    expect(page.outputContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');
    expect(page.dpValueContainer.innerText).toBe('-P7Y3M2W4DT1H3M5S');
  });
});
