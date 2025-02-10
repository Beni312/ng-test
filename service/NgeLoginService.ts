import { inject, Injectable, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { INgeLoginService } from '../interface/INgeLoginService';
import { NGE_API_URL, NGE_LOGIN_SERVICE_CONFIG, NGE_TOASTR_SERVICE } from '../tokens';
import { INgeLoginServiceConfig } from '../interface/i-nge-login-service-config';

@Injectable()
export class NgeLoginService<T> implements INgeLoginService<T> {
  readonly form = signal(
    new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  );

  _config = inject(NGE_LOGIN_SERVICE_CONFIG);
  http = inject(HttpClient);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly config: Signal<INgeLoginServiceConfig> = signal(this._config);
  readonly toastrService = inject(NGE_TOASTR_SERVICE, {optional: true});
  readonly router = inject(Router);
  readonly apiUrl = inject(NGE_API_URL, {optional: true}) || '';

  constructor() {
  }

  login(): Observable<any> {
    this.loading.set(true);
    this.errorMessage.set(null);

    const formValue = this.form().value;
    return this.http.post(`/${this.apiUrl}/${this.config().loginPath}`, formValue)
      .pipe(
        tap({
          next: () => {
            this.loading.set(false);
            this.toastrService?.success(this.config().successfulLoginMessage);
            this.form().reset();
            this.router.navigateByUrl(this.config().navigateAfterSuccessfulLogin);
          },
          error: (err) => {
            const errorMessage = this.config().failedLoginMessage || err.error.message;
            this.errorMessage.set(errorMessage);
            this.toastrService?.error(errorMessage);
            this.loading.set(false);
          }
        })
      )
  }
}
