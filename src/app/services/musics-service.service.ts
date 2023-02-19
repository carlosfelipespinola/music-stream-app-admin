import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface CreateMusicInputData {
  name: string;
  description: string;
  genre: string;
  imageFile: File;
  audioFile: File;
}

export interface IMusicDto {
  audioFileName: string;
  description: string;
  genre: string;
  id: number;
  name: string;
  photoFileName: string
}

export class MusicDto implements IMusicDto {
  audioFileName: string;
  description: string;
  genre: string;
  id: number;
  name: string;
  photoFileName: string;
  hostUrl: string;

  constructor(data: IMusicDto, hostUrl: string) {
    this.audioFileName = data.audioFileName;
    this.description = data.description;
    this.genre = data.genre;
    this.id = data.id;
    this.name = data.name;
    this.photoFileName = data.photoFileName;
    this.hostUrl = hostUrl
  }
  
  get photoUrl() {
    return `${this.hostUrl}/${this.photoFileName}`
  }
}

export class CreateMusicException {}

@Injectable({
  providedIn: 'root'
})
export class MusicsServiceService {

  constructor(private readonly httpClient: HttpClient) {}

  async createMusic(data: CreateMusicInputData) {
    console.log(data)
    const formData = new FormData()
    formData.append("thumbnail", data.imageFile);
    formData.append("music", data.audioFile);
    formData.append("genre", data.genre);
    formData.append("name", data.name);
    formData.append("description", data.description);
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', "application/x-www-form-urlencoded;charset=UTF-8");
    try {
      const response = await firstValueFrom(this.httpClient.post<IMusicDto>("http://localhost:8080/musicas", formData))
      return new MusicDto(response, "http://localhost:8080")
    } catch (error) {
      console.error(error)
      throw new CreateMusicException();
    }
    
  }

  async fetchMusics(): Promise<MusicDto[]> {
    try {
      const response = await firstValueFrom(this.httpClient.get<IMusicDto[]>("http://localhost:8080/musicas"))
      return response.map((x) => new MusicDto(x, "http://localhost:8080"))
    } catch (error) {
      console.error(error)
      throw new CreateMusicException();
    }
  }

  async deleteMusic(id: number): Promise<void> {
    try {
      await firstValueFrom(this.httpClient.delete(`http://localhost:8080/musicas/${id}`))
    } catch (error) {
      console.error(error)
      throw new CreateMusicException();
    }
  }
}
