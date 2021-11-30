import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Album } from '../models';
import { ResponseToEntity } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private cache$ = new BehaviorSubject<Album[]>([]);

  private readonly URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  loadAlbums(): Observable<Album[]> {
    return this.cache$
      .pipe(
        take(1),
        switchMap(result => result.length ? of(result) : this.http.get<Album[]>(this.URL)),
        map(result => result.map(album => ResponseToEntity(album))),
        tap(result => this.cache$.next(result)));
  }

  getAlbum(id: number): Observable<Album | null> {
    return this.loadAlbums().pipe(map(result => result.find(i => i.id === id) ?? null));
  }

  add(album: { title: string; songs: string[] }): Observable<Album> {
    return this.loadAlbums()
      .pipe(
        map(result => result.concat({ id: result.length, userId: NaN, ...album })),
        tap(result => this.cache$.next(result)),
        map(result => result.slice(-1)[0]));
  }
}
