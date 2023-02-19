import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileInput } from 'ngx-material-file-input';
import { MusicsServiceService } from 'src/app/services/musics-service.service';

@Component({
  selector: 'app-music-form-dialog',
  templateUrl: './music-form-dialog.component.html',
  styleUrls: ['./music-form-dialog.component.scss']
})
export class MusicFormDialogComponent {

  public name?: string;
  public description?: string;
  public genre?: string;
  public imageFile?: FileInput;
  public audioFile?: FileInput;

  public errorMessage?: string;
  public shouldDisableButton = false


  constructor(public dialogRef: MatDialogRef<MusicFormDialogComponent>, private musics: MusicsServiceService) {
    
  }

  public async createMusic() {
    for(let field of [this.name, this.description, this.genre, this.imageFile, this.audioFile]) {
      if (!field) { return; }
    }

    try {
      this.errorMessage = undefined
      this.shouldDisableButton = true
      const createdMusic = await this.musics.createMusic({
        name: this.name!,
        description: this.description!,
        genre: this.genre!,
        audioFile: this.audioFile!.files[0],
        imageFile: this.imageFile!.files[0]
      })
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.dialogRef.close(createdMusic)
    } catch (error) {
      this.errorMessage = "Ocorreu um erro ao cadastrar a música"
    } finally {
      this.shouldDisableButton = false
    }
    
  }
}
