import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectorCiudadesService {

  constructor() { }

  loadCiudades(): Observable<string[]> {
    return of(['logroño', 'zaragoza', 'sevilla', 'málaga', 'madrid', 'barcelona', 'oviedo']).pipe(delay(5000));
  }

  loadProvincias(): Observable<string[]> {
    return of(['La Rioja', 'Zaragoza', 'Sevilla', 'Málaga', 'Madrid', 'Barcelona', 'Asturias']).pipe(delay(1000));
  }
}
