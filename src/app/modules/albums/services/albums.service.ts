import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private readonly URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  loadAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.URL);
  }
}
