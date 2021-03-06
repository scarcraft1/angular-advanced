import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { map, switchMap, take, tap } from "rxjs/operators";
import { users } from '../db/usuarios.db';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private usuarios$ = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.usuarios$.next(users);
  }

  loadUsers(refresh = false) {
    return this.usuarios$.pipe(
      take(1),
      switchMap(users => !users.length || refresh
        ? this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
          .pipe(tap(result => this.usuarios$.next(result)))
        : of(users)));
    // return this.usuarios$.asObservable();
  }

  loadUser(id: number) {
    return this.loadUsers(true)
      .pipe(map(users => users.filter(u => u.id === id)));
  }

  addUser(user: { id: number, name: string, email: string }) {
    this.usuarios$.next(this.usuarios$.getValue().concat(user));
  }

  editUser(id: number, user: { id: number, name: string, email: string }) {
    this.usuarios$.next(this.usuarios$.getValue().map(i => i.id === id ? user : i));
  }
}
