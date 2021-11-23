import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-filepicker',
  templateUrl: './filepicker.component.html',
  styleUrls: ['./filepicker.component.scss']
})
export class FilepickerComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  @Input()
  public ref: string = '';

  @Input()
  vector: number[] = [];

  get vectorOrdenado() {
    return this.vector.sort((a, b) => a-b);
  }

  ordenar(vector: number[]) {
    return vector.sort((a, b) => a-b);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.ref = '';
  }

  ngDoCheck(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  ngOnDestroy(): void {
  }

}
