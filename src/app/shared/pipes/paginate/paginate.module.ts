import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatePipe } from './paginate.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginatePipe],
  exports: [PaginatePipe],
  providers: [PaginatePipe]
})
export class PaginateModule { }
