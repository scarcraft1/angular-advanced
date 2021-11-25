import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FetchModule, FilepickerModule, HighlightModule, HotCounterModule, PaginateModule, TooltipModule } from '@shared';
import { COMPONENTS } from './components';
import { ROUTES } from './routes';
import { UserDetailsResolver, UsuariosService } from './services';
import { LocalCacheInterceptor } from './services/local-cache.interceptor';
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: LocalCacheInterceptor
    }
  ],
})
export class UsuariosModule { }
