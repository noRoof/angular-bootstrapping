import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private count: WritableSignal<number> = signal(0);
  running: Signal<boolean> = computed(() => this.count() !== 0);

  constructor() { }

  start() {
    this.count.update(value => value + 1);
  }

  stop() {
    this.count.update(value => value - 1);
  }
}
