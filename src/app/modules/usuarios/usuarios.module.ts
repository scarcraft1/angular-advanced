import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FetchModule, FilepickerModule, HighlightModule, HotCounterModule, PaginateModule, TooltipModule } from '@shared';
import { COMPONENTS } from './components';
import { ROUTES } from './routes';
import { UsuariosRoutingModule } from './usuarios.routing';

@NgModule({
  declarations: [...COMPONENTS, ...ROUTES],
  imports: [
    CoreModule,
    FetchModule,
    TooltipModule,
    PaginateModule,
    HighlightModule,
    HotCounterModule,
    FilepickerModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
