import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'lib-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  @Output() spinnerTimeout: EventEmitter<void> = new EventEmitter<void>();
  @Input() timeoutSeconds: number;
  
  isActive: boolean;

  private spinnerTimerSubscription: Subscription = null;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
	  this.spinnerService.status.subscribe((status: number) => {
    	if (status > 0) {
    		this.isActive = true;
    		//initialize timer of 'timeoutSeconds' seconds
    		if (this.spinnerTimerSubscription === null && this.timeoutSeconds){
    			const spinnerTimer = timer(this.timeoutSeconds*1000);
    			this.spinnerTimerSubscription = spinnerTimer.subscribe(() => {
    				this.spinnerTimeout.emit();
    			});
    		}
    	} else {
    		this.isActive = false;
    		if (this.spinnerTimerSubscription){
    			this.spinnerTimerSubscription.unsubscribe();
    			this.spinnerTimerSubscription = null;
    		}
    	}      
    });
  }

  ngOnDestroy() {
    if (this.spinnerTimerSubscription){
      this.spinnerTimerSubscription.unsubscribe();
    }
  }
}