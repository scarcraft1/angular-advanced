import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paginate' })
export class PaginatePipe<T> implements PipeTransform {
  transform(value: T[], page: number, itemsPerPage: number = 10, logName = ''): T[] {
    console.count(logName);
    return value.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
  }
}
