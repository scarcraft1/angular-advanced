import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UsuariosService } from '.';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<any> {
  constructor(private service: UsuariosService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.loadUser(Number(route.paramMap.get('id')));
  }
}
