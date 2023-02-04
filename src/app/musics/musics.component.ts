import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteMusicDialogComponent } from './delete-music-dialog/delete-music-dialog.component';
import { MusicFormDialogComponent } from './music-form-dialog/music-form-dialog.component';

interface Music {
  name: string;
  authors: string;
  photo: string
}

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss']
})
export class MusicsComponent {
  public musics: Music[] = [];

  constructor(public dialog: MatDialog) {
    for (let index = 0; index < 20; index++) {
      this.musics.push({
        name: `Nome de uma música ${index}`,
        authors: `Authores da música ${index}`,
        photo: `https://picsum.photos/id/${(index + 1) * 10}/50`
      })
    }
  }

  registerMusic(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MusicFormDialogComponent, {
      maxWidth: '900px',
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  deleteMusic(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteMusicDialogComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
