import { Observable } from 'rxjs';

export interface IConfirmationService {
  confirm(config: any): Observable<any>;
}
