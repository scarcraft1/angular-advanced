import { Directive, forwardRef, OnInit } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { Song } from "../models";

export function SongValidator(control: AbstractControl): ValidationErrors | null {
  if (!control || !control.value) { return null; }
  const value = control.value as Song;
  if (value.title === 'hello' && value.duration < 60) {
    return {
      song: 'Hello tiene que durar más de 60 segundos'
    };
  } else if (value.title === 'hello') {
    return null;
  } else if (!value.title) {
    return {
      song: 'El título es requerido'
    };
  } else if (!value.duration || value.duration < 90) {
    return {
      song: 'La duración debe ser mayor de 90 segundos'
    };
  }
  return null;
}

@Directive({
  selector: '[appSongValidator]',
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SongValidatorDirective),
    }
  ]
})
export class SongValidatorDirective implements OnInit, Validator {
  ngOnInit() {
    console.log('validate etiqueta');
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return SongValidator(control);
  }

}

