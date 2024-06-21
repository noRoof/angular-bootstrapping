import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Example, ExampleBody, ExampleDetails, MoreData } from '../types/example';

/**
 * Service to implement the request to get the information from the used source
 * We can use here a API request, firestore or supabase
 */
@Injectable({
  providedIn: 'root'
})
export class SourceService {

  mockExamplesData: ExampleDetails[] = [{
    id: 1,
    name: 'One',
    description: 'This is the first example',
    otherData: []
  }, {
    id: 2,
    name: 'Two',
    description: 'This is the second example',
    otherData: []
  }];

  constructor() { }

  getExamples(): Observable<Example[]> {
    return of(this.mockExamplesData).pipe(delay(500));
  }

  getExampleDetails(id: number): Observable<ExampleDetails | undefined> {
    const example = this.mockExamplesData.find(p => p.id === id)
    if (example) {
      return of({
        ...example,
      }).pipe(delay(500));
    } else {
      return of(undefined);;
    }
  }

  deleteExample = (id: number) => {
    this.mockExamplesData = [...this.mockExamplesData.filter(p => p.id !== id)];
    return of(undefined).pipe(delay(500));
  }

  updateExample = (example: Example): Observable<Example | undefined> => {
    const currentExample = this.mockExamplesData.find(p => p.id === example.id)
    if (currentExample) {
      currentExample.description = example.description;
      currentExample.name = example.name;
      this.mockExamplesData = [...this.mockExamplesData];
      return of({
        ...example,
      }).pipe(delay(500))
    } else {
      return of(undefined);
    }
  }

  createExample = (example: ExampleBody): Observable<Example> => {
    this.mockExamplesData = [
      ...this.mockExamplesData,
      {
        ...example,
        id: this.mockExamplesData.length + 1,
        otherData: []
      }
    ];
    return of({
      ...example,
      id: this.mockExamplesData.length
    }).pipe(delay(500));
  }

  addDataToExample = (options: {exampleId: number, moreData: MoreData[]}): Observable<ExampleDetails | undefined> => {
    const {exampleId, moreData} = options;
    const currentExample = this.mockExamplesData.find(p => p.id === exampleId)
    if (currentExample) {
      currentExample.otherData = [...currentExample.otherData, ...moreData];
      this.mockExamplesData = [...this.mockExamplesData];
      return of({
        ...currentExample,
      }).pipe(delay(500))
    } else {
      return of(undefined);
    }
  }
}
