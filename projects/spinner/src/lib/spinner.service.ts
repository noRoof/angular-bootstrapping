import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {

  constructor() { }

  public status: Subject<number> = new Subject<number>();
  private activeCount = 0;

  public start(): void {
    this.activeCount ++;
    this.status.next(this.activeCount);
  }

  public stop(): void {
    if (this.activeCount > 0) {
      this.activeCount --;
      this.status.next(this.activeCount);
    }
  }

  public secureStart(): void {
    if (this.activeCount === 0) {
        this.activeCount ++;
      this.status.next(this.activeCount);
    }
  }
}