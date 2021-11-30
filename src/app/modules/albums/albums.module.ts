import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { RadioModule } from '@shared';
import { AlbumsRoutingModule } from './albums.routing';
import { COMPONENTS, CONTROLS } from './components';
import { ROUTES } from './routes';

@NgModule({
  declarations: [...ROUTES, ...COMPONENTS, ...CONTROLS],
  imports: [CoreModule, AlbumsRoutingModule, RadioModule]
})
export class AlbumsModule { }
