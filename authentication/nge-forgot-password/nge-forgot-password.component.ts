import { Component, inject, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { INgeForgotPasswordService } from '../../interface/INGeForgotPasswordService';
import { NGE_FORGOT_PASSWORD_SERVICE } from '../../tokens';

@Component({
  selector: 'nge-forgot-password',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './nge-forgot-password.component.html'
})
export class NgeForgotPasswordComponent<T> {

  forgotPasswordService: INgeForgotPasswordService<T> = inject(NGE_FORGOT_PASSWORD_SERVICE);
  inputClass = input('ng-forgot-password-input');

  onSubmit() {
    this.forgotPasswordService.forgotPassword().subscribe();
  }
}
