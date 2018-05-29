# ngx-duration-picker

![ngx-duration-picker screenshot](https://s1.postimg.org/34fefss1yn/image.png)

A reusable [Angular](angular.io) duration-picker component that works with [ISO_8601 durations](https://en.wikipedia.org/wiki/ISO_8601#Durations).

Requires [Bootstrap 3](https://getbootstrap.com/docs/3.3/), css only (no Bootstrap JS or jQuery needed).

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

## Usage

```<ngxd-duration-picker [(value)]="myDuration"></ngxd-duration-picker>```

where **myDuration** will be the variable where the output is stored, you can also pass an initial value.

### Watch for changes

if you need to perform some operations each time the bound variable changes, you can use `(valueChange)`:

```<ngxd-duration-picker [(value)]="myDuration" (valueChange)="doSomeStuff()">```

### Passing options

you can pass specify some options by binding `[options]` to your configuration object:

```<ngxd-duration-picker [(value)]="myDuration" [options]="{ showWeeks: false }" mode="seconds">```

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

#### showLetters
Boolean, default `true`. Shows the letters on top (Y, M, W, D, H, M, S)

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

### Mode options

#### ISO_8601 (default)
The default mode where the input and output value are in [ISO_8601 durations](https://en.wikipedia.org/wiki/ISO_8601#Durations).

#### seconds/minutes/hours/days/weeks/months/years
Specify one of these types if you would for example like to input and output seconds instead of ISO 8601 durations.
