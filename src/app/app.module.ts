import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MusicsComponent } from './musics/musics.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteMusicDialogComponent } from './musics/delete-music-dialog/delete-music-dialog.component';
import { MusicFormDialogComponent } from './musics/music-form-dialog/music-form-dialog.component';
import { FileInputConfig, MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';

export const config: FileInputConfig = {
  sizeUnit: 'Octet'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MusicsComponent,
    DeleteMusicDialogComponent,
    MusicFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    MaterialFileInputModule
  ],
  providers: [{ provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config }],
  bootstrap: [AppComponent]
})
export class AppModule { }
