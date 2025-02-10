import { Observable } from 'rxjs';
import { IBaseAuthenticationComponent } from './IBaseAuthenticationComponent';

export interface INgeNewPasswordService<T> extends IBaseAuthenticationComponent {
  resetPassword(): Observable<T>;
}
