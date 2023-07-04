import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.scss'],
})
export class EditItemFormComponent {
  constructor(
    public dialogRef: MatDialogRef<EditItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {}
  
  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }
}
