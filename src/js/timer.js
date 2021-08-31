class CountdownTimer {
  constructor({ selector = "#timer-1", targetDate = Date.now() }) {
    this.targetDate = new Date(targetDate);

    this.timer = document.querySelector(`${selector}`);
    this.dateRef = this.timer.querySelector('[data-value="date"]');

    this.daysRef = this.timer.querySelector('[data-value="days"]');
    this.hoursRef = this.timer.querySelector('[data-value="hours"]');
    this.minsRef = this.timer.querySelector('[data-value="mins"]');
    this.secsRef = this.timer.querySelector('[data-value="secs"]');

    this.timerID = null;
  }
  getDifference() {
    return this.targetDate - Date.now();
  }
  renderTimer() {
    const time = this.getDifference();
    if (time < 0) return;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.dateRef.textContent = this.targetDate.toDateString();
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }
  start() {
    this.timerID = setInterval(() => {
      this.renderTimer();
    }, 1000);
  }
  stop() {
    clearInterval(this.timerID);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: "Sep 20, 2021",
});

timer.start();
