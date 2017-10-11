import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DurationPickerModule } from './duration-picker/duration-picker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DurationPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
