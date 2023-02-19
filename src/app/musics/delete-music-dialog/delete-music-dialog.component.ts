import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MusicsServiceService } from 'src/app/services/musics-service.service';

@Component({
  selector: 'app-delete-music-dialog',
  templateUrl: './delete-music-dialog.component.html',
  styleUrls: ['./delete-music-dialog.component.scss']
})
export class DeleteMusicDialogComponent {

  public isDeleting = false;

  constructor(public dialogRef: MatDialogRef<DeleteMusicDialogComponent>) {
    
  }

  confirm() {
    this.dialogRef.close(true)
  }

  cancel() {
    this.dialogRef.close(false)
  } 
}
