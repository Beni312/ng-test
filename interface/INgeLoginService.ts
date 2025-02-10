import { FormGroup } from '@angular/forms';
import { Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { INgeLoginServiceConfig } from './i-nge-login-service-config';

export interface INgeLoginService<T> {
  form: Signal<FormGroup>;
  loading: Signal<boolean>;
  errorMessage: Signal<string | null>;
  config: Signal<INgeLoginServiceConfig>;
  login(): Observable<T>;
}
