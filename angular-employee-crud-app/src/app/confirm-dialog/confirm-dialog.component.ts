import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  constructor(private _dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  confirmAction() {
    this._dialogRef.close(true);
  }
}
