import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from 'src/app/services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class UsersFilterComponent {

  public form = new FormGroup({ name: new FormControl(''), });

  constructor(private service: FilterService) { }

  public search() {
    console.log('search', this.form.value)
    this.service.setFilter(this.form.value);
  }

  ngOnInit() {
    this.service.getCurrentFilterAsync().subscribe(i => this.form.reset(i || {}));
  }
}
