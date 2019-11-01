import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myValue;
  mySecondValue;
  myThirdValue;
  myNegativeValue;
  showNegative = true;
  previewFormat = '{{Y}} years, {{M}} months, {{W}} weeks, {{D}} days, {{h}} hours, {{m}} minutes, {{s}} seconds';
  disabled = false;
  form: FormGroup;
  yearsLabel = 'years';
  weeksLabel = 'weeks';
  hoursLabel = 'hours';

  ngOnInit() {
    this.form = new FormGroup({
      'myDurationControl': new FormControl(null),
    });
  }

  makeUntouched() {
    this.form.get('myDurationControl').markAsUntouched();
  }

  setControlToValue(newValue) {
    this.form.get('myDurationControl').setValue(newValue);
  }

  toggleEnableDisableControl() {
    if (this.form.get('myDurationControl').disabled) {
      this.form.get('myDurationControl').enable();
    } else {
      this.form.get('myDurationControl').disable();
    }
  }
}
