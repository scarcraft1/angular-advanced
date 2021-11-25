import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { SelectorCiudadesComponent } from './selector-ciudades.component';

@NgModule({
  imports: [CoreModule],
  exports: [SelectorCiudadesComponent],
  declarations: [SelectorCiudadesComponent],
})
export class SelectorCiudadesModule { }
