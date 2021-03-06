import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = fb.group(
      {
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('password', 'confirm_password'),
      }
    );
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }
  model(model: any, arg1: null, arg2: number) {
    throw new Error('Method not implemented.');
  }
}
