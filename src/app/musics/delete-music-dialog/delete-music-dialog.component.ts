import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-music-dialog',
  templateUrl: './delete-music-dialog.component.html',
  styleUrls: ['./delete-music-dialog.component.scss']
})
export class DeleteMusicDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteMusicDialogComponent>) {
    
  }
}
