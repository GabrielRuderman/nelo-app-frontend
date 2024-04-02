import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
  readonly loginForm = inject(FormBuilder).group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  })

}