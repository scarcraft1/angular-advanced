import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FilepickerModule, HighlightModule, HotCounterModule } from '@shared';
import { FetchModule } from 'src/app/shared/directives/fetch';
import { COMPONENTS } from './components';
import { ROUTES } from './routes';
import { UsuariosRoutingModule } from './usuarios.routing';

@NgModule({
  declarations: [ ...COMPONENTS, ...ROUTES ],
  imports: [
    CoreModule,
    FetchModule,
    HighlightModule,
    HotCounterModule,
    FilepickerModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
