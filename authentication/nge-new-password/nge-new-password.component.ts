import { Component, inject, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { INgeNewPasswordService } from '../../interface/INgeNewPasswordService';
import { NGE_NEW_PASSWORD_SERVICE } from '../../tokens';

@Component({
  selector: 'nge-new-password',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './nge-new-password.component.html'
})
export class NgeNewPasswordComponent<T> {

  newPasswordService: INgeNewPasswordService<T> = inject(NGE_NEW_PASSWORD_SERVICE)
  inputClass = input('ng-new-password-input');

  onSubmit() {
    this.newPasswordService.resetPassword().subscribe();
  }
}
