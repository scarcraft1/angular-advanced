import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { users } from '../db/usuarios.db';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private usuarios$ = new BehaviorSubject<any[]>([]);

  constructor() {
    this.usuarios$.next(users);
  }

  loadUsers() {
    return this.usuarios$.asObservable();
  }

  loadUser(id: number) {
    return this.loadUsers()
      .pipe(map(users => users.filter(u => u.id === id)));
  }

  addUser(user: {id: number, name: string, email: string}) {
    this.usuarios$.next(this.usuarios$.getValue().concat(user));
  }

  editUser(id: number, user: {id: number, name: string, email: string}) {
    this.usuarios$.next(this.usuarios$.getValue().map(i => i.id === id ? user : i));
  }
}
