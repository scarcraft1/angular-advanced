import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-advanced';

  public myObject = {
    nombre: 'Óscar',
    apellido1: 'Villas',
    email: 'ovillas@hiberus.com',
    direccion: {
      calle: 'Avda. La Rioja',
      numero: 6,
      piso: 4
    }
  };
}
