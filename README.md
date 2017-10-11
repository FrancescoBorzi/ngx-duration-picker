# ngx-duration-picker

![ngx-duration-picker screenshot](https://s1.postimg.org/34fefss1yn/image.png)

A reusable [Angular](angular.io) duration-picker component that works with [ISO_8601 durations](https://en.wikipedia.org/wiki/ISO_8601#Durations).

Requires [Bootstrap 3](https://getbootstrap.com/docs/3.3/), css only (no Bootstrap JS or jQuery needed).

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

```<app-duration-picker [(value)]="myDuration"></app-duration-picker>```

where **myDuration** will be the variable where the output is stored, you can also pass an initial value.

### Watch for changes

if you need to perform some operations each time the bound variable changes, you can use `(valueChange)`:

```<app-duration-picker [(value)]="myDuration" (valueChange)="doSomeStuff()">```

### Passing options

you can pass specify some options by binding `[options]` to your configuration object:

```<app-duration-picker [(value)]="myDuration" [options]="{ showWeeks: false }">```

### Available options

#### showButtons
Boolean, default true. Shows the up and down buttons.

#### showPreview
Boolean, default true. Shows a preview of the value.

#### showLetters
Boolean, default true. Shows the letters on top (Y, M, W, D, H, M, S)

#### showYears
Boolean, default true. Shows the years, when hidden it will be always considered as 0.

#### showMonths
Boolean, default true. Shows the months, when hidden it will be always considered as 0.

#### showWeeks
Boolean, default true. Shows the weeks, when hidden it will be always considered as 0.

#### showDays
Boolean, default true. Shows the days, when hidden it will be always considered as 0.

#### showHours
Boolean, default true. Shows the hours, when hidden it will be always considered as 0.

#### showMinutes
Boolean, default true. Shows the minutes, when hidden it will be always considered as 0.

#### showSeconds
Boolean, default true. Shows the seconds, when hidden it will be always considered as 0.
