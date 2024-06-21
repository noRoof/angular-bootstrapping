import { Component, DestroyRef, OnInit, Signal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CrudHandlerComponent } from '../../components/crud-handler/crud-handler.component';
import { FacadeService } from '../../services/facade.service';
import { Example } from '../../types/example';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExampleFormComponent } from './example-form/example-form.component';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CrudHandlerComponent],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export default class ExamplesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'actions'];
  dataSource: Signal<Example[]> = signal([]);
  actions = {
    edit: true,
    details: true,
    delete: true
  };
  destroyRef = inject(DestroyRef);

  constructor(
    private facadeService: FacadeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = this.facadeService.getExamples()
  }

  openCreate(){
    const dialogRef = this.dialog.open(ExampleFormComponent, {
      data: {header: 'Add an example'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.facadeService.createExample(result).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(()=> {})
      }
    });
  }

  goToDetails(example: Example){
    this.router.navigate(['/examples', example.id]);
  }

  openEdit(example: Example){
    const dialogRef = this.dialog.open(ExampleFormComponent, {
      data: {header: 'Edit Example', body: example},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.facadeService.updateExample({id: example.id, ...result}).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(()=> {})
      }
    });
  }

  deleteRole(example: Example){
    this.facadeService.deleteExample(example.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(()=> {})
  }
}
