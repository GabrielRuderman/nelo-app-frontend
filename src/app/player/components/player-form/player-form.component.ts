import {Component, inject} from '@angular/core';
import {AbstractControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {PlayerFormService} from "../../services/player-form.service";
import {JsonPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgClass],
  providers: [PlayerFormService],
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent {
  readonly form = inject(PlayerFormService).playerForm;
  protected readonly Validators = Validators;
  onSubmit(): void {
    console.log(this.form.value);
  }
  isInvalid(control: AbstractControl): boolean {
    return  (control.touched || control.dirty) && control.invalid;
  }
}
