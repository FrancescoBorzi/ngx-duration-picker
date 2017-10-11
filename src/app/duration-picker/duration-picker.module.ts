import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DurationPickerComponent } from './duration-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DurationPickerComponent,
  ],
  exports: [
    DurationPickerComponent,
  ],
})
export class DurationPickerModule { }
