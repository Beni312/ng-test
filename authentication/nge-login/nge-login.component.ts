import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { NGE_LOGIN_SERVICE } from '../../tokens';

@Component({
  selector: 'nge-login',
  imports: [ReactiveFormsModule, TranslatePipe],
  standalone: true,
  templateUrl: './nge-login.component.html'
})
export class NgeLoginComponent {
  loginService = inject(NGE_LOGIN_SERVICE);

  login() {
    this.loginService.login().subscribe()
  }
}
