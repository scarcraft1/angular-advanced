import { Component, OnInit } from '@angular/core';
import { PaginatePipe } from '@shared';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public cosas: number[] = Array.from(new Array(200)).map((_, idx) => idx);

  public get misCosas() {
    return this.paginate.transform(this.cosas, this.page, 10, 'get');
  }

  public page = 0;

  constructor(private paginate: PaginatePipe<number>) { }

  public otrasCosas() {
    console.count('otrasCosas');
    return this.cosas.slice(this.page * 10, (this.page + 1) * 10);
  }

  public otrasCosas2(cosas: number[]) {
    console.count('otrasCosas2');
    return cosas.slice(this.page * 10, (this.page + 1) * 10);
  }

  ngOnInit(): void {
    console.log('edit', this.cosas);
  }

  changeValue() {
    this.cosas[5] = Math.random();
    console.log(this.cosas[5]);
  }

}
