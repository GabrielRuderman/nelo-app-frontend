import {inject, Injectable} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Injectable()
export class PlayerFormService {
  readonly playerForm = inject(FormBuilder).group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: new FormControl('', { updateOn: "blur", validators: [Validators.email] }),
    gender: ["", [Validators.required]]
  });
}


