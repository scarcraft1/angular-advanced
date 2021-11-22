import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rol } from '../../types';
import { UserToUsuario } from '../../utils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public roles: typeof Rol = Rol;

  public userRole: Rol = Rol.superadmin;

  public usuarios: any[] = [];

  private service: any;

  constructor() { }

  ngOnInit(): void {
    (this.service.getUsers() as Observable<unknown[]>)
      .pipe(map(users => users.map(i => UserToUsuario<any>(i))))
      .subscribe(usuarios => this.usuarios = usuarios);
  }

}
