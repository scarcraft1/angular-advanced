import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FetchModule, FilepickerModule, HighlightModule, HotCounterModule, TooltipModule } from '@shared';
import { COMPONENTS } from './components';
import { ROUTES } from './routes';
import { UsuariosRoutingModule } from './usuarios.routing';

@NgModule({
  declarations: [ ...COMPONENTS, ...ROUTES ],
  imports: [
    CoreModule,
    FetchModule,
    TooltipModule,
    HighlightModule,
    HotCounterModule,
    FilepickerModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
