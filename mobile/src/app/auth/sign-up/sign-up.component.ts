import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTabButton,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbell, chevronForward } from 'ionicons/icons';
import { AuthService } from 'src/core/services/auth.service';
import { ToastComponent } from 'src/core/shared/components/toast.component';

@Component({
  standalone: true,
  selector: 'sign-up-component',
  templateUrl: './sign-up.component.html',
  imports: [
    IonModal,
    IonFab,
    IonFabButton,
    IonHeader,
    IonContent,
    IonText,
    IonTabButton,
    IonButton,
    IonInput,
    IonToolbar,
    IonBackButton,
    IonButtons,
    ReactiveFormsModule,
    IonItem,
    IonIcon,
    IonDatetime,
    IonDatetimeButton,
    IonLabel
  ],
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly authService: AuthService,
    private toast: ToastComponent
  ) {
    addIcons({ chevronForward, barbell });
  }
  signUp!: FormGroup;

  ngOnInit(): void {
    this.signUp = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
    });
  }

  nextStep() {
    if (this.signUp.valid) {
      const formData = { ...this.signUp.value }; // Clonando os valores do form
      formData.birthDate = new Date(formData.birthDate).toISOString()

      this.authService.create(formData).subscribe({
        next: (response) => {
          console.log(response);
          this.toast.setToast({
            label: 'Cadastro feito com sucesso!',
            icon: 'checkbox',
            color: 'success',
          });
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error(error);
          this.toast.setToast({
            label: 'Erro ao fazer cadastro!',
            icon: 'close-cicle',
            color: 'danger',
          });
        },
      });
    }
  }
}
