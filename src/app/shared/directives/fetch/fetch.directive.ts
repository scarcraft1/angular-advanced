import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/modules/usuarios/services';

@Directive({
  selector: '[appFetch]'
})
export class FetchDirective implements OnInit {

  @Input('appFetch') model: 'users' | 'products' = 'users';
  @Output() users$ = new EventEmitter<any[]>();

  constructor(private service: UsuariosService) { }

  ngOnInit() {
    switch (this.model) {
      case 'users':
        this.service.loadUsers().subscribe(users => this.users$.emit(users));
        break;
      default:
        throw new Error('El modelo no está soportado');
    }
  }

}
