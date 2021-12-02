import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HotCounterDirective } from '@shared';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FilterService } from 'src/app/services';
import { UserListItemComponent, UsersFilterComponent } from '../../components';
import { UsuariosService } from '../../services';
import { Rol } from '../../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

  @ViewChild(HotCounterDirective)
  public hotCounter?: HotCounterDirective;

  @ViewChild('filterInput', { read: NgModel, static: false })
  public filterInput?: NgModel

  @ViewChildren(UserListItemComponent)
  public users?: QueryList<UserListItemComponent>

  @ContentChild('filterInput')
  public filterInput2?: any

  private destroy$ = new Subject<void>();

  public roles: typeof Rol = Rol;

  public filter: string = 'hello';
  public filterVisible = true;

  public userRole: Rol = Rol.superadmin;

  public usuarios: any[] = [];
  public users$?: Observable<any[]>;

  constructor(private cd: ChangeDetectorRef, private service: UsuariosService, private filterService: FilterService) { }

  trackById(user: any): number {
    return user.id;
  }

  addUser() {
    this.service.addUser({ id: this.usuarios.length + 1, name: `${Math.random() * 1000}`, email: '' });
  }

  ngOnInit(): void {
    this.filterVisible = true;
    this.filterService.setFilterComponent(UsersFilterComponent);
    this.filterService.setTopic('usuarios');
    combineLatest([
      this.filterService.getFilterForTopicAsync('usuarios'),
      this.service.loadUsers()
    ]).pipe(
      takeUntil(this.destroy$),
      map(([filter, users]) => filter ? users.filter(i => i.name.startsWith(filter.name)) : users)
    ).subscribe(users => this.usuarios = users);
    setTimeout(() => {
      this.filterVisible = false;
      this.cd.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    if (this.hotCounter) {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => this.hotCounter?.addClick(), 100);
        this.cd.detectChanges();
      }
      // this.hotCounter.bgColor = 'purple';
    }
  }

}
