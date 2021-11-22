import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorModule } from '../vendor/vendor.module';

const CoreModules =  [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  VendorModule
];


@NgModule({
  declarations: [],
  imports: CoreModules,
  exports: CoreModules
})
export class CoreModule { }
