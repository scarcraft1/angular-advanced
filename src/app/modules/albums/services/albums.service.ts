import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Album } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private favorites$ = new BehaviorSubject<Album[]>([]);

  private readonly URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  loadAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.URL);
  }

  isFavorite(album: Album): boolean {
    return this.favorites$.getValue().includes(album);
  }

  toggleFavorite(album: Album) {
    const favorites = this.favorites$.getValue();
    if (favorites.includes(album)) {
      this.favorites$.next(favorites.filter(i => i !== album));
    } else {
      this.favorites$.next(favorites.concat(album));
    }
  }
}
