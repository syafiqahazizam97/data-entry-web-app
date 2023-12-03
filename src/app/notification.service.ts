import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig  } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}


  showSuccess(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['custom-snackbar', 'success-snackbar'],
      horizontalPosition: 'end', // Right
      verticalPosition: 'top', // Top
    };
    this.snackBar.open(message, 'Close', config);
  }

  showError(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['custom-snackbar', 'error-snackbar'],
      horizontalPosition: 'end', // Right
      verticalPosition: 'top', // Top
    };
    this.snackBar.open(message, 'Close', config);
  }

}