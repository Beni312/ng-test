import { InjectionToken } from '@angular/core';
import { INgeMfaService } from './interface/INgeMfaService';
import { INgeForgotPasswordService } from './interface/INGeForgotPasswordService';
import { INgeNewPasswordService } from './interface/INgeNewPasswordService';
import { INgeLoginService } from './interface/INgeLoginService';
import { INgeLoginServiceConfig } from './interface/i-nge-login-service-config';
export const NGE_MFA_SERVICE = new InjectionToken<INgeMfaService<any>>('MFA_SERVICE');
export const NGE_FORGOT_PASSWORD_SERVICE = new InjectionToken<INgeForgotPasswordService<any>>('FORGOT_PASSWORD_SERVICE');
export const NGE_NEW_PASSWORD_SERVICE = new InjectionToken<INgeNewPasswordService<any>>('NEW_PASSWORD_SERVICE');
export const NGE_LOGIN_SERVICE = new InjectionToken<INgeLoginService<any>>('NGE_LOGIN_SERVICE');
export const NGE_LOGIN_SERVICE_CONFIG = new InjectionToken<INgeLoginServiceConfig>('NGE_TOASTR_SERVICE');
export const NGE_TOASTR_SERVICE = new InjectionToken<any>('NGE_TOASTR_SERVICE');
export const NGE_API_URL = new InjectionToken<string>('NGE_API_URL');
