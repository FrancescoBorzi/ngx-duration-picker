import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myValue;
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
}
