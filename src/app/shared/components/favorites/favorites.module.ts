import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  imports: [CoreModule],
  exports: [FavoritesComponent],
  declarations: [FavoritesComponent],
})
export class FavoritesModule { }
