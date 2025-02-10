import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NGE_MFA_SERVICE } from '../../tokens';

@Component({
  selector: 'nge-login-mfa',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './nge-login-mfa.component.html'
})
export class NgeLoginMfaComponent {

  mfaService = inject(NGE_MFA_SERVICE);
  inputClass = input('ng-login-mfa-input');

  onSubmit() {
    this.mfaService.verifyMfa().subscribe();
  }
}
