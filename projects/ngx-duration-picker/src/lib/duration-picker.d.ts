export interface DurationPickerOptions {
  showNegative: boolean;
  showButtons: boolean;
  showPreview: boolean;
  showLetters: boolean;
  showYears: boolean;
  showMonths: boolean;
  showWeeks: boolean;
  showDays: boolean;
  showHours: boolean;
  showMinutes: boolean;
  showSeconds: boolean;
  zeroValue: string | null;
  letters: {
    years: string,
    months: string,
    weeks: string,
    days: string,
    hours: string,
    minutes: string,
    seconds: string,
  };
}
