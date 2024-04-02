import { Component, inject } from '@angular/core';
import { LoginFormService } from './login-form.service';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  providers: [LoginService, LoginFormService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly loginForm = inject(LoginFormService).loginForm;
  readonly loginService = inject(LoginService);

  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe(console.log);
  }

}
