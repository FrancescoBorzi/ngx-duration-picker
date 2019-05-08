import { WrapperPageObject } from './wrapper.po';
import {
  CHANGED_PREVIEW_FORMAT,
  CHANGED_PREVIEW_VALUE,
  DEFAULT_PREVIEW_FORMAT,
  DEFAULT_PREVIEW_VALUE,
  PREVIEW_FORMAT_WRAPPER
} from './constants';


/* Specific checks performed against the "Preview Format" duration picker */

let page: WrapperPageObject;

describe('Preview Format (specific checks)', () => {
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
