import { Observable } from 'rxjs';
import { IBaseAuthenticationComponent } from './IBaseAuthenticationComponent';

export interface INgeMfaService<T> extends IBaseAuthenticationComponent {
  verifyMfa(): Observable<T>;
}
