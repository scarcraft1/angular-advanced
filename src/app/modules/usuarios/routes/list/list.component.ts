import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services';
import { Rol } from '../../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public roles: typeof Rol = Rol;

  public filter: string = '';

  public userRole: Rol = Rol.superadmin;

  public usuarios: any[] = [];

  constructor(private service: UsuariosService) { }

  trackById(user: any): number {
    return user.id;
  }

  addUser() {
    this.service.addUser({ id: this.usuarios.length + 1, name: `${Math.random() * 1000}`, email: ''});
  }

  ngOnInit(): void {
    // this.service.loadUsers().subscribe(users => this.usuarios = users);
  }

}
