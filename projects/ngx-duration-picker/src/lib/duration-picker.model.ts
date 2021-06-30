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
  previewFormat: string;
  customOutputFormat: string;
  labels: {
    years?: string;
    months?: string;
    weeks?: string;
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
  unitSteps: {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
}
