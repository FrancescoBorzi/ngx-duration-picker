[![Build Status](https://travis-ci.org/FrancescoBorzi/ngx-duration-picker.svg?branch=master)](https://travis-ci.org/FrancescoBorzi/ngx-duration-picker)
[![npm version](https://badge.fury.io/js/ngx-duration-picker.svg)](https://badge.fury.io/js/ngx-duration-picker)
[![dependencies Status](https://david-dm.org/francescoborzi/ngx-duration-picker/status.svg)](https://david-dm.org/francescoborzi/ngx-duration-picker)
[![devDependencies Status](https://david-dm.org/francescoborzi/ngx-duration-picker/dev-status.svg)](https://david-dm.org/francescoborzi/ngx-duration-picker?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# ngx-duration-picker 

![ngx-duration-picker screenshot](https://i.postimg.cc/fRM3Y0z3/Screenshot_from_2018-09-18_17-01-28.png)

A reusable [Angular](https://angular.io/) duration-picker component that works with [ISO_8601 durations](https://en.wikipedia.org/wiki/ISO_8601#Durations).

Requires [Bootstrap](https://getbootstrap.com/), css only (no Bootstrap JS or jQuery needed).

**[DEMO](https://embed.plnkr.co/1dAIGrGqbcfrNVqs4WwW/)**

## Installation

- Run:

`npm install --save ngx-duration-picker`

- Then in your `app.module.ts` add `DurationPickerModule` between your `imports`:

```
@NgModule({
  declarations: [...],
  imports: [
    DurationPickerModule,
    ...
  ],
  providers: [...],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Local development

### Run the application

- On one terminal tab run `ng build ngx-duration-picker --watch`. This will build the library sources (`projects/ngx-duration-picker/*`) and watch for changes.

- On another terminal tab run `ng serve` to serve the demo app (`src/*`) and play with it.

### Run the tests

- Unit tests are located in `projects/ngx-duration-picker/src/lib/*.spec.ts` and you can run them using `npm run test:unit`
- Integration tests are located in `src/app/integration-tests/*.spec.ts` and you can run them using `npm run test:integration`

The default browser is Chrome.  You can also append `:ci` to run them in Headless mode, and `:ci:firefox` to run them with Firefox.

## Usage

```<ngx-duration-picker [(value)]="myDuration"></ngx-duration-picker>```

where **myDuration** will be the variable where the output is stored, you can also pass an initial value.

### Watch for changes

if you need to perform some operations each time the bound variable changes, you can use `(valueChange)`:

```<ngx-duration-picker [(value)]="myDuration" (valueChange)="doSomeStuff()">```

### Passing options

you can pass specify some options by binding `[options]` to your configuration object:

```<ngx-duration-picker [(value)]="myDuration" [options]="{ showWeeks: false }">```

### Available options

#### zeroValue
String or Null, default `'PT0S'`.

Value to be used when the duration is 0. Since [the specification](https://en.wikipedia.org/wiki/ISO_8601#Durations) says that `'PT0S'` or `'P0D'` are both valid, you are allowed to change this value. You can also pass just `null`.

#### showNegative
Boolean, default `false`. Sets up the option for negative and positive durations.

#### showButtons
Boolean, default `true`. Shows the up and down buttons.

#### showPreview
Boolean, default `true`. Shows a preview of the value.

#### previewFormat
String, default `ISO`.

You can optionally specify a date format using:
- `{{Y}}` for years
- `{{M}}` for months
- `{{W}}` for weeks
- `{{D}}` for days
- `{{h}}` for hours
- `{{m}}` for minutes
- `{{s}}` for seconds

Example string: `{{h}} hours : {{m}} minutes : {{s}} seconds`

#### customOutputFormat
String, default `ISO`.

You can optionally specify:
- `timestamp` for duration in milliseconds
- `seconds` for duration in seconds
- custom string as described in `previewFormat` option

Chosen value will be emitted by `customOutput`.

#### showLetters
Boolean, default `true`. Shows the letters on top (Y, M, W, D, H, M, S)

#### labels
Object, accepting labels that should be shown above the fields instead of default letters (`showLetters` has to be set to true).

Available fields (with default labels):
- years (`Y`)
- months (`M`)
- weeks (`W`)
- days (`D`)
- hours (`H`)
- minutes (`M`)
- seconds (`S`)

Example object which is overwriting `weeks` and `hours` properties:
```angular2
{
    weeks: 'tyg',
    hours: 'godz'
}
```

#### unitSteps
Object, accepting numbers representing increment/decrement step size for each unit. Non-positive values will be replaced with default value: 1.

Available fields:
- years
- months
- weeks
- days
- hours
- minutes
- seconds

Example object which is overwriting `weeks` and `hours` properties:
```angular2
{
    weeks: 4,
    hours: 2
}
```

#### showYears
Boolean, default `true`. Shows the years, when hidden it will be always considered as 0.

#### showMonths
Boolean, default `true`. Shows the months, when hidden it will be always considered as 0.

#### showWeeks
Boolean, default `true`. Shows the weeks, when hidden it will be always considered as 0.

#### showDays
Boolean, default `true`. Shows the days, when hidden it will be always considered as 0.

#### showHours
Boolean, default `true`. Shows the hours, when hidden it will be always considered as 0.

#### showMinutes
Boolean, default `true`. Shows the minutes, when hidden it will be always considered as 0.

#### showSeconds
Boolean, default `true`. Shows the seconds, when hidden it will be always considered as 0.
