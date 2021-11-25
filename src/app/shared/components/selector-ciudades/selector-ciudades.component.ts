import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin } from 'rxjs';
import { concatMap, delay, switchMap, tap } from 'rxjs/operators';
import { SelectorCiudadesService } from './selector-ciudades.service';

@Component({
  selector: 'app-selector-ciudades',
  templateUrl: './selector-ciudades.component.html',
  styleUrls: ['./selector-ciudades.component.scss']
})
export class SelectorCiudadesComponent implements OnInit {
  public loading: boolean = false;
  public ciudades: string[] = [];
  public provincias: string[] = [];

  constructor(private service: SelectorCiudadesService) { }

  ngOnInit(): void {
    this.loading = true;
    // forkJoin(this.service.loadCiudades(), this.service.loadProvincias())
    // // combineLatest(this.service.loadCiudades(), this.service.loadProvincias())
    // .subscribe(([ciudades, provincias]: [string[], string[]]) => {
    //   this.ciudades = ciudades;
    //   this.provincias = provincias;
    //   this.loading = false;
    // }, error => {}, () => {})


    // this.service.loadProvincias()
    //   .pipe(switchMap(result => {
    //     this.provincias = result;
    //     return this.service.loadCiudades();
    //   }))
    // .subscribe(result => {
    //   this.loading = false;
    //   this.ciudades = result;
    // });
    // this.service.loadProvincias()
    //   .pipe(concatMap(result => {
    //     this.provincias = result;
    //     return this.service.loadCiudades();
    //   }))
    //   .subscribe(result => {
    //     this.loading = false;
    //     this.ciudades = result;
    //   });
    forkJoin(
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000)),
      this.service.loadProvincias().pipe(delay(Math.random() * 1000))
    )
    .subscribe(result => console.log(result));
    // this.service.loadProvincias()
    //   .subscribe(result => {
    //     this.provincias = result;
    //     this.service.loadCiudades().subscribe(resutl => {
    //       this.ciudades = resutl;
    //       this.loading = false;
    //     });
    //   });
  }

}
