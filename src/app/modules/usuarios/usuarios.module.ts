import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FilepickerModule } from '@shared';
import { ROUTES } from './routes';
import { UsuariosRoutingModule } from './usuarios.routing';

@NgModule({
  declarations: [ ...ROUTES ],
  imports: [
    CoreModule,
    FilepickerModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
