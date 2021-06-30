import { PageObject } from './page-object';
import { PLAIN_BINDING_WRAPPER, REACTIVE_FORM_WRAPPER } from './constants';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

/* Generic checks performed against the "Plain binding" and the "Reactive Form" duration pickers */

[
  { selector: PLAIN_BINDING_WRAPPER, title: 'Plain Binding'},
  { selector: REACTIVE_FORM_WRAPPER, title: 'Reactive Form'},
].forEach(({ selector, title }) => {

  describe(`${title} (generic checks)`, () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
    }));

    const setup = () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const page = new PageObject(fixture, selector);
      return { page };
    };

    it('should contain the DurationPicker element', () => {
      const { page } = setup();
      expect(page.durationPicker).toBeTruthy();
    });

    it('toggle Disable should correctly work', async () => {
      const { page } = setup();
      page.clickElement(page.toggleButton);
      await page.whenStable();

      expect(page.dpYearsArrowUp.classList.toString()).toContain('disabled');
      expect(page.dpMonthsArrowUp.classList.toString()).toContain('disabled');
      expect(page.dpWeeksArrowUp.classList.toString()).toContain('disabled');
      expect(page.dpDaysArrowUp.classList.toString()).toContain('disabled');
      expect(page.dpHoursArrowUp.classList.toString()).toContain('disabled');
      expect(page.dpMinutesArrowUp.classList.toString()).toContain('disabled');
      expect(page.dpSecondsArrowUp.classList.toString()).toContain('disabled');
      expect(page.dpYearsArrowDown.classList.toString()).toContain('disabled');
      expect(page.dpMonthsArrowDown.classList.toString()).toContain('disabled');
      expect(page.dpWeeksArrowDown.classList.toString()).toContain('disabled');
      expect(page.dpDaysArrowDown.classList.toString()).toContain('disabled');
      expect(page.dpHoursArrowDown.classList.toString()).toContain('disabled');
      expect(page.dpMinutesArrowDown.classList.toString()).toContain('disabled');
      expect(page.dpSecondsArrowDown.classList.toString()).toContain('disabled');

      expect(page.dpYearsInput.disabled).toBeTrue();
      expect(page.dpMonthsInput.disabled).toBeTrue();
      expect(page.dpWeeksInput.disabled).toBeTrue();
      expect(page.dpDaysInput.disabled).toBeTrue();
      expect(page.dpHoursInput.disabled).toBeTrue();
      expect(page.dpMinutesInput.disabled).toBeTrue();
      expect(page.dpSecondsInput.disabled).toBeTrue();
    });

    it('toggle Enable should correctly work', async () => {
      const { page } = setup();
      page.clickElement(page.toggleButton);
      await page.whenStable();
      page.clickElement(page.toggleButton);
      await page.whenStable();

      expect(page.dpYearsArrowUp.classList.toString()).not.toContain('disabled');
      expect(page.dpMonthsArrowUp.classList.toString()).not.toContain('disabled');
      expect(page.dpWeeksArrowUp.classList.toString()).not.toContain('disabled');
      expect(page.dpDaysArrowUp.classList.toString()).not.toContain('disabled');
      expect(page.dpHoursArrowUp.classList.toString()).not.toContain('disabled');
      expect(page.dpMinutesArrowUp.classList.toString()).not.toContain('disabled');
      expect(page.dpSecondsArrowUp.classList.toString()).not.toContain('disabled');
      expect(page.dpYearsArrowDown.classList.toString()).not.toContain('disabled');
      expect(page.dpMonthsArrowDown.classList.toString()).not.toContain('disabled');
      expect(page.dpWeeksArrowDown.classList.toString()).not.toContain('disabled');
      expect(page.dpDaysArrowDown.classList.toString()).not.toContain('disabled');
      expect(page.dpHoursArrowDown.classList.toString()).not.toContain('disabled');
      expect(page.dpMinutesArrowDown.classList.toString()).not.toContain('disabled');
      expect(page.dpSecondsArrowDown.classList.toString()).not.toContain('disabled');

      expect(page.dpYearsInput.disabled).toBeFalse();
      expect(page.dpMonthsInput.disabled).toBeFalse();
      expect(page.dpWeeksInput.disabled).toBeFalse();
      expect(page.dpDaysInput.disabled).toBeFalse();
      expect(page.dpHoursInput.disabled).toBeFalse();
      expect(page.dpMinutesInput.disabled).toBeFalse();
      expect(page.dpSecondsInput.disabled).toBeFalse();
    });

    it('pushing the "set to value" button should correctly work', () => {
      const { page } = setup();
      page.clickElement(page.setValueButton);

      expect(page.outputContainer.innerText).toBe('P7Y3M2W4DT1H3M5S');
      expect(page.dpYearsInput.getAttribute('ng-reflect-model')).toBe('7');
      expect(page.dpMonthsInput.getAttribute('ng-reflect-model')).toBe('3');
      expect(page.dpWeeksInput.getAttribute('ng-reflect-model')).toBe('2');
      expect(page.dpDaysInput.getAttribute('ng-reflect-model')).toBe('4');
      expect(page.dpHoursInput.getAttribute('ng-reflect-model')).toBe('1');
      expect(page.dpMinutesInput.getAttribute('ng-reflect-model')).toBe('3');
      expect(page.dpSecondsInput.getAttribute('ng-reflect-model')).toBe('5');
    });

    it('manually setting the duration value using inputs should correctly work', () => {
      const { page } = setup();
      page.clear(page.dpYearsInput);
      page.setInputValue(page.dpYearsInput, '1');
      expect(page.outputContainer.innerText).toBe('P1Y');
      expect(page.dpValueContainer.innerText).toBe('P1Y');

      page.clear(page.dpMonthsInput);
      page.setInputValue(page.dpMonthsInput, '2');
      expect(page.outputContainer.innerText).toBe('P1Y2M');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M');

      page.clear(page.dpWeeksInput);
      page.setInputValue(page.dpWeeksInput, '3');
      expect(page.outputContainer.innerText).toBe('P1Y2M3W');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W');

      page.clear(page.dpDaysInput);
      page.setInputValue(page.dpDaysInput, '4');
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4D');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4D');

      page.clear(page.dpHoursInput);
      page.setInputValue(page.dpHoursInput, '5');
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4DT5H');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4DT5H');

      page.clear(page.dpMinutesInput);
      page.setInputValue(page.dpMinutesInput, '6');
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4DT5H6M');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4DT5H6M');

      page.clear(page.dpSecondsInput);
      page.setInputValue(page.dpSecondsInput, '7');
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4DT5H6M7S');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4DT5H6M7S');

      page.clear(page.dpYearsInput);
      page.clear(page.dpMonthsInput);
      page.clear(page.dpWeeksInput);
      page.clear(page.dpDaysInput);
      page.clear(page.dpHoursInput);
      page.clear(page.dpMinutesInput);
      page.clear(page.dpSecondsInput);
      expect(page.outputContainer.innerText).toBe('PT0S');
      expect(page.dpValueContainer.innerText).toBe('PT0S');
    });

    it('manually setting the duration value using arrows should correctly work', () => {
      const { page } = setup();
      page.clickElement(page.dpYearsArrowUp);
      expect(page.outputContainer.innerText).toBe('P1Y');
      expect(page.dpValueContainer.innerText).toBe('P1Y');

      page.clickElement(page.dpYearsArrowUp);
      expect(page.outputContainer.innerText).toBe('P2Y');
      expect(page.dpValueContainer.innerText).toBe('P2Y');

      page.clickElement(page.dpYearsArrowDown);
      expect(page.outputContainer.innerText).toBe('P1Y');
      expect(page.dpValueContainer.innerText).toBe('P1Y');

      page.clickElement(page.dpMonthsArrowUp);
      expect(page.outputContainer.innerText).toBe('P1Y1M');
      expect(page.dpValueContainer.innerText).toBe('P1Y1M');

      page.clickElement(page.dpYearsArrowDown);
      expect(page.outputContainer.innerText).toBe('P1M');
      expect(page.dpValueContainer.innerText).toBe('P1M');

      page.clickElement(page.dpYearsArrowDown);
      expect(page.outputContainer.innerText).toBe('P1M');
      expect(page.dpValueContainer.innerText).toBe('P1M');

      page.clickElement(page.dpYearsArrowUp);
      page.clickElement(page.dpYearsArrowUp);
      expect(page.outputContainer.innerText).toBe('P2Y1M');
      expect(page.dpValueContainer.innerText).toBe('P2Y1M');

      page.clickElement(page.dpYearsArrowDown);
      page.clickElement(page.dpMonthsArrowUp);
      page.clickElement(page.dpWeeksArrowUp);
      page.clickElement(page.dpWeeksArrowUp);
      page.clickElement(page.dpWeeksArrowUp);
      expect(page.outputContainer.innerText).toBe('P1Y2M3W');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W');

      page.clickElement(page.dpWeeksArrowDown);
      expect(page.outputContainer.innerText).toBe('P1Y2M2W');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M2W');

      page.clickElement(page.dpWeeksArrowUp);
      page.clickElement(page.dpDaysArrowUp);
      page.clickElement(page.dpDaysArrowUp);
      page.clickElement(page.dpDaysArrowUp);
      page.clickElement(page.dpDaysArrowUp);
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4D');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4D');

      page.clickElement(page.dpHoursArrowUp);
      page.clickElement(page.dpHoursArrowUp);
      page.clickElement(page.dpHoursArrowUp);
      page.clickElement(page.dpHoursArrowUp);
      page.clickElement(page.dpHoursArrowUp);
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4DT5H');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4DT5H');

      page.clickElement(page.dpMinutesArrowUp);
      page.clickElement(page.dpMinutesArrowUp);
      page.clickElement(page.dpMinutesArrowUp);
      page.clickElement(page.dpMinutesArrowUp);
      page.clickElement(page.dpMinutesArrowUp);
      page.clickElement(page.dpMinutesArrowUp);
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4DT5H6M');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4DT5H6M');

      page.clickElement(page.dpSecondsArrowUp);
      page.clickElement(page.dpSecondsArrowUp);
      page.clickElement(page.dpSecondsArrowUp);
      page.clickElement(page.dpSecondsArrowUp);
      page.clickElement(page.dpSecondsArrowUp);
      page.clickElement(page.dpSecondsArrowUp);
      page.clickElement(page.dpSecondsArrowUp);
      expect(page.outputContainer.innerText).toBe('P1Y2M3W4DT5H6M7S');
      expect(page.dpValueContainer.innerText).toBe('P1Y2M3W4DT5H6M7S');
    });
  });

});
