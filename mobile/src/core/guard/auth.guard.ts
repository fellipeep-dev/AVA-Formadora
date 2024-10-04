import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/components/toast.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastComponent
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/begin']);
      console.log('Nao autenticado');
      this.toast.setToast({
        color: 'danger',
        label: 'Usuario não autenticado',
        icon: 'close-cicle'
      })
      this.authService.logout();
      return false;
    }
    console.log('Autenticado!');
    return true;
  }
}
