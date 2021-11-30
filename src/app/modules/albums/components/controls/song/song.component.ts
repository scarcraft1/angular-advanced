import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Song } from '../../../models';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SongComponent)
    }
  ]
})
export class SongComponent implements OnInit, OnDestroy, ControlValueAccessor {
  private destroy$ = new Subject<void>();

  public form: FormGroup;

  public onChanged: any = () => { };
  public onTouched: any = () => { };

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      duration: [0, [Validators.required, Validators.min(60)]]
    })
  }

  ngOnInit(): void {
    this.form.valueChanges
      .subscribe(song => {
        this.onChanged(song);
        this.onTouched();
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(song: Song): void {
    song = song ?? { title: '', duration: 0 };
    this.form.setValue(song, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

}
