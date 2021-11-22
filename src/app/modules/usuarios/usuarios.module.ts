import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ROUTES } from './routes';
import { UsuariosRoutingModule } from './usuarios.routing';

@NgModule({
  declarations: [ ...ROUTES ],
  imports: [
    CoreModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
