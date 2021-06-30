import { PageObject } from './page-object';
import { PREVIEW_FORMAT_WRAPPER } from './constants';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

/* Specific checks performed against the "Preview Format" duration picker */
describe('Preview Format (specific checks)', () => {
  const DEFAULT_PREVIEW_FORMAT = '{{Y}} years, {{M}} months, {{W}} weeks, {{D}} days, {{h}} hours, {{m}} minutes, {{s}} seconds';
  const DEFAULT_PREVIEW_DEFAULT_VALUE = '0 years, 0 months, 0 weeks, 0 days, 0 hours, 0 minutes, 0 seconds';
  const DEFAULT_PREVIEW_CHANGED_VALUE = '7 years, 3 months, 2 weeks, 4 days, 1 hours, 3 minutes, 5 seconds';
  const CHANGED_PREVIEW_FORMAT = '{{h}} hours : {{m}} minutes : {{s}} seconds';
  const CHANGED_PREVIEW_DEFAULT_VALUE = '0 hours : 0 minutes : 0 seconds';
  const CHANGED_PREVIEW_CHANGED_VALUE = '1 hours : 3 minutes : 5 seconds';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = new PageObject(fixture, PREVIEW_FORMAT_WRAPPER);
    return { page };
  };

  it('should show correct values in preview', async () => {
    const { page } = setup();

    await page.whenStable();

    expect(page.previewFormatInput.value).toEqual(DEFAULT_PREVIEW_FORMAT);
    expect(page.dpValueContainer.innerText).toEqual(DEFAULT_PREVIEW_DEFAULT_VALUE);

    page.clickElement(page.setValueButton);

    expect(page.previewFormatInput.value).toEqual(DEFAULT_PREVIEW_FORMAT);
    expect(page.dpValueContainer.innerText).toEqual(DEFAULT_PREVIEW_CHANGED_VALUE);
  });

  it('should still show correct values in changed preview', async () => {
    const { page } = setup();

    page.clear(page.previewFormatInput);
    await page.whenStable();
    page.setInputValue(page.previewFormatInput, CHANGED_PREVIEW_FORMAT);
    await page.whenStable();

    expect(page.previewFormatInput.value).toEqual(CHANGED_PREVIEW_FORMAT);
    expect(page.dpValueContainer.innerText).toEqual(CHANGED_PREVIEW_DEFAULT_VALUE);

    page.clickElement(page.setValueButton);

    expect(page.previewFormatInput.value).toEqual(CHANGED_PREVIEW_FORMAT);
    expect(page.dpValueContainer.innerText).toEqual(CHANGED_PREVIEW_CHANGED_VALUE);
  });
});
