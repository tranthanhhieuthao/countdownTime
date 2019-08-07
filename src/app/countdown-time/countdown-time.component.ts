import {Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit, OnDestroy, OnChanges {
  private IntervalId;
  message = '';
  remainingTime: number;
  @Input('first_seconds') seconds = 11;

  ngOnChanges(changes: SimpleChanges): void {
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN((vFixed)) ? v : vFixed;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  start() {
    this.IntervalId = setInterval(() => {
      this.seconds--;
      if (this.seconds <= 0) {
        this.seconds = 0;
        this.message = 'Finished';
      }
    }, 1000);

  }

  stop() {
    clearInterval(this.IntervalId);
}

  reset() {
    this.seconds = 15;
    this.message = '';
    clearInterval(this.IntervalId);
  }
}
