import { Injectable, Signal } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { catchError, of, tap } from 'rxjs';
import { SourceService } from './source.service';
import { DataService } from './data.service';
import { SpinnerService } from './spinner.service';
import { Example, ExampleBody, ExampleDetails } from '../types/example';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(
    private dataService: DataService,
    private sourceService: SourceService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) { }

  getExamples(): Signal<Example[]> {
    return this.dataService.getExamples();
  }

  getExample(id: number): Signal<ExampleDetails | undefined> {
    return this.dataService.getExampleDetails(id);
  }

  loadExamples = () => {
    this.spinnerService.start();
    return this.sourceService.getExamples()
      .pipe(catchError((error) => {
        this.snackBar.open('Ocurrió un error', undefined, {duration: 2000})
        return of([]);
      }))
      .pipe(tap(examples => {
        this.spinnerService.stop();
        this.dataService.setExamples(examples);
      }));
  }

  loadExampleDetails = (id: number) => {
    this.spinnerService.start();
    return this.sourceService.getExampleDetails(id)
    .pipe(catchError((error) => {
      this.snackBar.open('Ocurrió un error', undefined, {duration: 2000})
      return of(undefined);
    }))
    .pipe(tap(example => {
      this.spinnerService.stop();
      if (example) {
        this.dataService.insertExampleDetails(example);
      }
    }));
  }

  deleteExample = (id: number) => {
    this.spinnerService.start();
    return this.sourceService.deleteExample(id)
    .pipe(catchError((error) => {
      this.snackBar.open('Ocurrió un error', undefined, {duration: 2000})
      return of('error');
    }))
    .pipe(tap(error => {
      this.spinnerService.stop();
      if (!error) {
        this.dataService.deleteExample(id);
      }
    }));
  }

  updateExample = (example: Example) => {
    this.spinnerService.start();
    return this.sourceService.updateExample(example)
    .pipe(catchError((error) => {
      this.snackBar.open('Ocurrió un error', undefined, {duration: 2000})
      return of(undefined);
    }))
    .pipe(tap((example: undefined | Example) => {
      this.spinnerService.stop();
      if (example) {
        this.dataService.updateExample(example);
      }
    }));
  }

  createExample = (example: ExampleBody) => {
    this.spinnerService.start();
    return this.sourceService.createExample(example)
    .pipe(catchError((error) => {
      this.snackBar.open('Ocurrió un error', undefined, {duration: 2000})
      return of(undefined);
    }))
    .pipe(tap(example => {
      this.spinnerService.stop();
      if (example) {
        this.dataService.insertExample(example);
      }
    }));
  }
}
