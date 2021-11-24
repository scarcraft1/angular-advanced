import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsuariosService } from '../../services';
import { Rol } from '../../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  public roles: typeof Rol = Rol;

  public filter: string = '';

  public userRole: Rol = Rol.superadmin;

  public usuarios: any[] = [];
  public users$?: Observable<any[]>;

  constructor(private service: UsuariosService) { }

  trackById(user: any): number {
    return user.id;
  }

  addUser() {
    this.service.addUser({ id: this.usuarios.length + 1, name: `${Math.random() * 1000}`, email: '' });
  }

  ngOnInit(): void {
    this.service.loadUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => this.usuarios = users);
    this.users$ = this.service.loadUsers();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
