import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core';
import { DatepickerModule } from '@shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { ROUTES } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    ...PIPES,
    ...ROUTES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
