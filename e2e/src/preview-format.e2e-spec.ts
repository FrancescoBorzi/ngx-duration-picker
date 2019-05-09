import { WrapperPageObject } from './wrapper.po';
import { PREVIEW_FORMAT_WRAPPER } from './constants';


/* Specific checks performed against the "Preview Format" duration picker */
describe('Preview Format (specific checks)', () => {
  const DEFAULT_PREVIEW_FORMAT = '{{Y}} years, {{M}} months, {{W}} weeks, {{D}} days, {{h}} hours, {{m}} minutes, {{s}} seconds';
  const DEFAULT_PREVIEW_VALUE = '7 years, 3 months, 2 weeks, 4 days, 1 hours, 3 minutes, 5 seconds';
  const CHANGED_PREVIEW_FORMAT = '{{h}} hours : {{m}} minutes : {{s}} seconds';
  const CHANGED_PREVIEW_VALUE = '1 hours : 3 minutes : 5 seconds';

  let page: WrapperPageObject;

  beforeEach(async () => {
    page = new WrapperPageObject(PREVIEW_FORMAT_WRAPPER);
    await page.navigateTo();

    page.setValueButton.click();
  });

  it('should show correct values in preview', () => {
    expect(page.previewFormatInput.getAttribute('value')).toEqual(DEFAULT_PREVIEW_FORMAT);
    expect(page.dpValueContainer.getText()).toEqual(DEFAULT_PREVIEW_VALUE);
  });

  it('should still show correct values in changed preview', () => {
    page.previewFormatInput.clear();
    page.previewFormatInput.sendKeys(CHANGED_PREVIEW_FORMAT);

    expect(page.previewFormatInput.getAttribute('value')).toEqual(CHANGED_PREVIEW_FORMAT);
    expect(page.dpValueContainer.getText()).toEqual(CHANGED_PREVIEW_VALUE);
  });
});
