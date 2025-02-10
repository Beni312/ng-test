import { Observable } from 'rxjs';
import { IBaseAuthenticationComponent } from './IBaseAuthenticationComponent';

export interface INgeForgotPasswordService<T> extends IBaseAuthenticationComponent {
  forgotPassword(): Observable<T>;
}
