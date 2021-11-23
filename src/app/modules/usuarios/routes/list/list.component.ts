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

  public userRole: Rol = Rol.superadmin;

  public usuarios: any[] = [];

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.service.loadUsers().subscribe(users => this.usuarios = users);
  }

}
