import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioComponent)
    }
  ]
})
export class RadioComponent implements OnInit, OnDestroy, ControlValueAccessor {
  private destroy$ = new Subject<void>();
  private selectedValue$ = new BehaviorSubject<any>(null);

  public get selectedValue() { return this.selectedValue$.getValue(); }
  public set selectedValue(val: any) { this.selectedValue$.next(val); }

  public name = Array.from(new Array(7)).map(i => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');

  @Input()
  public items: any[] = [];

  public isDisabled: boolean = false;

  public onChanged: any = () => {}
  public onTouched: any = () => {}

  constructor() { }

  ngOnInit(): void {
    this.selectedValue$.subscribe(val => {
      this.onChanged(val);
      this.onTouched();
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(val: any) {
    this.selectedValue = val;
  }

  setDisabledState?(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

}
