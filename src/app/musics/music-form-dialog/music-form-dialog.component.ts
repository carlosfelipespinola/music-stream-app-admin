import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-music-form-dialog',
  templateUrl: './music-form-dialog.component.html',
  styleUrls: ['./music-form-dialog.component.scss']
})
export class MusicFormDialogComponent {
  constructor(public dialogRef: MatDialogRef<MusicFormDialogComponent>) {
    
  }
}
