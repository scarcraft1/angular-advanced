import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public form: FormGroup;

  get f() {
    return this.form.controls;
  }

  get errors() {
    return this.getErrors(this.form);
  }

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  private getErrors(control: AbstractControl): ValidationErrors | null {
    if (control instanceof FormControl) {
      return control.errors;
    }
    if (control instanceof FormArray) {
      return control.controls.reduce((acc, control, idx) => {
        const errors = this.getErrors(control);
        if (errors) {
          acc = acc ?? {};
          acc['control_' + idx] = errors;
        }
        return acc
      }, control.errors)
    }
    return Object.entries((control as FormGroup).controls)
      .reduce((acc, [name, control]) => {
        const errors = this.getErrors(control);
        if (errors) {
          acc = acc ?? {};
          acc[name] = errors;
        }
        return acc;
      }, control.errors);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: ['Tercer título', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]]
    }, {
      validators: (control: AbstractControl) => control.value.title !== 'el título' ? { tituloIncorrecto: 'Debes indicar "el título"' } : null
    } as AbstractControlOptions);
  }

}
