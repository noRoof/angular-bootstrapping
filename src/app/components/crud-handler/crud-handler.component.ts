import { Component, Input, output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

interface Item {
  id: string | number;
}

export interface Actions {
  delete: boolean;
  edit: boolean;
  details: boolean
}

@Component({
  selector: 'app-crud-handler',
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatButtonModule],
  templateUrl: './crud-handler.component.html',
  styleUrl: './crud-handler.component.scss'
})
export class CrudHandlerComponent {
  onAddClick = output<void>();
  onDelete = output<any>();
  onEditClick = output<any>();
  onDetailsClick = output<any>();
  @Input({ required: true }) displayedColumns!: string[];
  @Input({ required: true }) dataSource!: Item[];
  @Input({ required: true }) actions!: Actions;

  constructor(public dialog: MatDialog) {}

  deleteClick(item: Item) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {header: 'Delete', content: 'Are you sure you want to delete this element?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDelete.emit(item);
      }
    });
  }
}
