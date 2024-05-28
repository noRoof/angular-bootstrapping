import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { EntityCollection } from '../types/entity';
import { Example, ExampleDetails } from '../types/example';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private examples: WritableSignal<Example[]> = signal([]);
  private examplesWithDetails: WritableSignal<EntityCollection<ExampleDetails>> = signal({ids: [], entities: []});

  constructor(private snackBar: MatSnackBar) { }

  deleteExample(id: number) {
    this.examples.update(value => {
      return [...value.filter(p => p.id !== id)]
    });
    this.examplesWithDetails.update(value => {
      const entities = {
        ...value.entities
      }
      delete entities[id];
      return {
        ids: [...value.ids.filter(id => id !== id)],
        entities
      }
    });
  }

  getExample(id: number) {
    return computed(() => this.examples().find(p => p.id === id));
  }

  getExampleDetails(id: number) {
    return computed(() => this.examplesWithDetails().entities[id]);
  }

  getExamples() {
    return computed(() => this.examples());
  }

  insertExample(example: Example) {
    // Updates info on list
    this.examples.update(value => {
      const index = value.findIndex(p => p.id === example.id)
      if (index > -1) {
        this.snackBar.open('Ya existía el elemento', undefined, {duration: 2000})
        return value;
      } else {
        return [...value, example]
      }
    });
    
  }

  insertExampleDetails(example: ExampleDetails) {
    // Updates detailed information
    this.examplesWithDetails.update(value => {
      let ids = [...value.ids];
      const index = value.ids.findIndex(id => id === example.id)
      if (index === -1) {
        ids = [...value.ids, example.id]
      }
      const entities = {
        ...value.entities
      }
      entities[example.id] = example;
      return {
        ids,
        entities
      }
    })
  }

  updateExample(example: ExampleDetails) {
    // Updates info on list
    this.examples.update(value => {
      const index = value.findIndex(p => p.id === example.id)
      if (index > -1) {
        value[index] = example
        return [...value]
      } else {
        this.snackBar.open('Elemento no encontrado', undefined, {duration: 2000})
        return value;
      }
    });
    // Updates new info on detailed information
    this.examplesWithDetails.update(value => {
      const index = value.ids.findIndex(id => id === example.id)
      if (index > -1) {
        const entities = {
          ...value.entities
        }
        entities[example.id] = {
          ...entities[example.id],
          ...example
        };
        return {
          ids: value.ids,
          entities
        }
      } else {
        return value;
      }
    })
  }

  setExamples(examples: Example[]) {
    this.examples.set([...examples])
  }
}
