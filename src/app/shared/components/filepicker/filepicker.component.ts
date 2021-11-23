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
    console.log('vectorOrdenado');
    return this.vector.sort((a, b) => a-b);
  }

  ordenar(vector: number[]) {
    console.log('ordenar');
    return vector.sort((a, b) => a-b);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.ref, changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.ref);
    this.ref = '';
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.ref);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.ref);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.ref);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.ref);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', this.ref);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.ref);
  }

}
