import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorModule } from '../vendor/vendor.module';
import { LocalCacheInterceptor } from './services';

const CoreModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  VendorModule
];

@NgModule({
  declarations: [],
  imports: CoreModules,
  exports: CoreModules,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: LocalCacheInterceptor
    }
  ]
})
export class CoreModule { }
