export type DurationPickerMode = 'ISO_8601' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';

export interface DurationPickerOptions {
  showNegative?: boolean;
  showButtons?: boolean;
  showPreview?: boolean;
  showLetters?: boolean;
  showYears?: boolean;
  showMonths?: boolean;
  showWeeks?: boolean;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  zeroValue?: string | null;
}
