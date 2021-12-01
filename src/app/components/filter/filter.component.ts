import { Component } from '@angular/core';
import { FilterService } from 'src/app/services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  topic$ = this.service.getCurrentTopicAsync();
  filter$ = this.service.getCurrentFilterAsync();

  constructor(private service: FilterService) { }

  public search(filter: any) {
    console.log('search', filter)
    this.service.setFilter(filter);
  }
}
