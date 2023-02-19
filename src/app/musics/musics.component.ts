import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MusicDto, MusicsServiceService } from '../services/musics-service.service';
import { DeleteMusicDialogComponent } from './delete-music-dialog/delete-music-dialog.component';
import { MusicFormDialogComponent } from './music-form-dialog/music-form-dialog.component';

interface Music {
  id: number;
  name: string;
  description: string;
  genre: string;
  photo: string;
}

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss']
})
export class MusicsComponent implements OnInit {
  public musics: Music[] = [];

  constructor(public dialog: MatDialog, public readonly musicsService: MusicsServiceService) {}

  ngOnInit(): void {
    this.fetchMusic()
  }

  registerMusic(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(MusicFormDialogComponent, {
      maxWidth: '900px',
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    const subscription = dialogRef.afterClosed().subscribe((x: MusicDto) => {
      this.fetchMusic()
      subscription.unsubscribe()
    })
    
  }

  deleteMusic(enterAnimationDuration: string, exitAnimationDuration: string, musicId: number): void {
    const ref = this.dialog.open(DeleteMusicDialogComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    const subscription = ref.afterClosed().subscribe(async (willDelete) => {
      try {
        if (!willDelete) { throw 'wont delete' }
        await this.musicsService.deleteMusic(musicId)
        this.fetchMusic()
      } catch (error) {} finally {
        subscription.unsubscribe();
      }
    })
  }

  async fetchMusic() {
    const musics = await this.musicsService.fetchMusics()
    this.musics = musics.map<Music>((x) => {
      return {
        id: x.id,
        name: x.name,
        description: x.description,
        genre: x.genre,
        photo: x.photoUrl
      }
    })
  }

}
