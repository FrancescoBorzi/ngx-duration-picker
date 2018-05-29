import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngxd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myValue;
  myNegativeValue;
  myNumberValue;
  showNegative = true;
  disabled = false;
  form: FormGroup;

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
