import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbell, chevronForward } from 'ionicons/icons';
import { AuthService } from 'src/core/services/auth.service';
import { ToastComponent } from 'src/core/shared/components/toast.component';

@Component({
  standalone: true,
  selector: 'login-component',
  templateUrl: './login.component.html',
  imports: [
    IonButtons,
    IonIcon,
    IonItem,
    IonInput,
    ReactiveFormsModule,
    IonBackButton,
    IonContent,
    IonText,
    IonToolbar,
    IonHeader,
  ],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly authService: AuthService,
    private toast: ToastComponent
  ) {
    addIcons({ chevronForward, barbell });
  }
  login!: FormGroup;

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  nextStep() {
    if (this.login.valid) {
      this.authService.postData('user/login', this.login.value).subscribe({
        next: (response) => {
          console.log(response);
          this.toast.setToast({
            label: 'Login feito com sucesso!',
            icon: 'checkbox',
            color: 'success',
          });
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error(error);
          this.toast.setToast({
            label: 'Erro ao fazer login!',
            icon: 'closeCicle',
            color: 'danger',
          });
        },
      });
    }
  }
}
