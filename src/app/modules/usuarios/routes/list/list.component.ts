import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FilterService } from 'src/app/services';
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

  constructor(private service: UsuariosService, private filterService: FilterService) { }

  trackById(user: any): number {
    return user.id;
  }

  addUser() {
    this.service.addUser({ id: this.usuarios.length + 1, name: `${Math.random() * 1000}`, email: '' });
  }

  ngOnInit(): void {
    this.filterService.setTopic('usuarios');
    combineLatest([
      this.filterService.getFilterForTopicAsync('usuarios'),
      this.service.loadUsers()
    ]).pipe(
      takeUntil(this.destroy$),
      map(([filter, users]) => filter ? users.filter(i => i.name.startsWith(filter.name)) : users)
    ).subscribe(users => this.usuarios = users);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
