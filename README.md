# Countdown Timer

## Для использования таймера импортируйте файл timer.js в свой проект и пропишите разметку

```js
import "./timer.js";

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
```

```html
<div class="timer" id="timer-1">
  <p class="title">
    Before <span class="date" data-value="date">date</span> left:
  </p>
  <div class="fields-wrap">
    <div class="field">
      <span class="value" data-value="days">00</span>
      <span class="label">Days</span>
    </div>

    <div class="field">
      <span class="value" data-value="hours">00</span>
      <span class="label">Hours</span>
    </div>

    <div class="field">
      <span class="value" data-value="mins">00</span>
      <span class="label">Minutes</span>
    </div>

    <div class="field">
      <span class="value" data-value="secs">00</span>
      <span class="label">Seconds</span>
    </div>
  </div>
</div>
```
