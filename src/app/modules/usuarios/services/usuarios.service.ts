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
}
