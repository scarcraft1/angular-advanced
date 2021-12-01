import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { RadioModule, SpinnerModule } from '@shared';
import { AlbumsRoutingModule } from './albums.routing';
import { COMPONENTS, CONTROLS } from './components';
import { ROUTES } from './routes';
import { DIRECTIVES_VALIDATORS } from './validators';

@NgModule({
  declarations: [...ROUTES, ...COMPONENTS, ...CONTROLS, ...DIRECTIVES_VALIDATORS],
  imports: [CoreModule, AlbumsRoutingModule, RadioModule, SpinnerModule]
})
export class AlbumsModule { }
