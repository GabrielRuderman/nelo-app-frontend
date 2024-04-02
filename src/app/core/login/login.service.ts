import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  readonly httpClient = inject(HttpClient);

  login(payload: any): Observable<any> {
    return this.httpClient.post('https://localhost:3000/user/signin', payload);
  }
}
