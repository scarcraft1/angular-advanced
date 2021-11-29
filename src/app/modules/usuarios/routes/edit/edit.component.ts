import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, of, Subject, timer } from 'rxjs';
import { catchError, delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { UsuariosService } from '../../services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  public user: any;
  public userDetails: any;

  constructor(private route: ActivatedRoute, private service: UsuariosService) { }
  observable = merge([
    of(1, 2, 3, 4),
    Promise.resolve(8),
    timer(4000),
    this.route.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        // take(1),
        delay(6000),
        switchMap(id => this.findUser(id)))
  ]);

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.userDetails = data.userDetails);
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        map(params => Number(params.get('id'))),
        switchMap(id => this.findUser(id)))
      .subscribe(user => this.user = user);
    console.log('estoy')
    this.observable.pipe(tap(() => console.log('dentro'))).subscribe(result => {
      console.log(result);
    })
  }


  private findUser(id: number) {
    return this.service.loadUser(id)
      .pipe(
        delay(6000),
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
