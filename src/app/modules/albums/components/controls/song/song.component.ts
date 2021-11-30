import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Song } from '../../../models';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, ControlValueAccessor {

  public form: FormGroup;

  public onChanged: any = () => {};
  public onTouched: any = () => {};

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      title: ['', Validators.required, Validators.minLength(3), Validators.maxLength(255)],
      duration: [0, [Validators.required, Validators.min(60)]]
    })
  }

  ngOnInit(): void {
  }

  writeValue(song: Song): void {
    this.form.setValue(song);
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean) {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

}
