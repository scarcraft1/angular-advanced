import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsuariosService } from '../../services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public user: any;

  constructor(private route: ActivatedRoute, private service: UsuariosService) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        switchMap(id => this.findUser(id)))
      .subscribe(user => this.user = user);
  }


  private findUser(id: number) {
    return this.service.loadUser(id)
      .pipe(
        map(i => {
          if (i[0]) {
            return i[0];
          }
          throw new Error('No se ha encontrado al usuario');
        }),
        catchError(error => {
          console.warn(error);
          return of({});
        }));
  }
}
