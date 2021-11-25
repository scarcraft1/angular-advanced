import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { AlbumsRoutingModule } from './albums.routing';
import { COMPONENTS } from './components';
import { ROUTES } from './routes';

@NgModule({
  declarations: [...ROUTES, ...COMPONENTS],
  imports: [CoreModule, AlbumsRoutingModule]
})
export class AlbumsModule { }
