import { Component, DestroyRef, Signal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FacadeService } from '../../services/facade.service';
import { ActivatedRoute } from '@angular/router';
import { ExampleDetails } from '../../types/example';
import { FormGroup, FormBuilder, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-example-detail',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './example-detail.component.html',
  styleUrl: './example-detail.component.scss'
})
export default class ExampleDetailComponent {
  exampleId?: number;
  exampleData: Signal<ExampleDetails | undefined> = signal(undefined);
  form: FormGroup;
  destroyRef = inject(DestroyRef);

  constructor(
    private facadeService: FacadeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      moreData: this.formBuilder.array([
      ]),
    });
  }

  ngOnInit(): void {
    this.exampleId = Number(this.route.snapshot.paramMap.get('id'));
    this.exampleData = this.facadeService.getExample(this.exampleId);
  }

  get moreData() {
    return this.form.get('moreData') as FormArray;
  }

  addMoreData() {
    this.moreData.push(this.formBuilder.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    }));
  }

  removeMoreData(index: number) {
    this.moreData.removeAt(index);
  }

  onSubmit(){
    this.facadeService.addDataToExample({exampleId: this.exampleId as number, moreData: this.form.value.moreData}).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(()=> {
      this.form.reset();
      this.moreData.clear();
    });
  }
}
