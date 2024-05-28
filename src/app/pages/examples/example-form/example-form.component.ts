import { Component, Inject, Input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Example, ExampleBody } from '../../../types/example';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

type DialogData = {
  header: string;
  body: Example;
}

@Component({
  selector: 'app-example-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose],
  templateUrl: './example-form.component.html',
  styleUrl: './example-form.component.scss'
})
export class ExampleFormComponent implements OnInit {

  exampleForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.maxLength(55),
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<ExampleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.data?.body) {
      this.exampleForm.patchValue(this.data.body);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
