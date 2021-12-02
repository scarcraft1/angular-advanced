import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core';
import { SelectorCiudadesModule, ShoppingBasketModule } from '@shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { ROUTES } from './routes';
import { BlinkDirective } from './directives/blink.directive';
import { ForInDirective } from './directives/for-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    ...PIPES,
    ...ROUTES,
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ShoppingBasketModule,
    SelectorCiudadesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
