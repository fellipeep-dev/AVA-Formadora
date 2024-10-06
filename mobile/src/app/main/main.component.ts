import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../core/shared/components/header/header.component';
import { WorkoutInterface } from 'src/core/shared/@types/workout';
import { WorkoutService } from './workout.service';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastComponent } from 'src/core/shared/components/toast.component';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'main-component',
  templateUrl: './main.component.html',
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonButton,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    HeaderComponent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonModal,
    IonTitle,
    IonItem,
    IonInput,
    ReactiveFormsModule,
    NgFor,
    NgIf,
  ],
})
export class MainComponent implements OnInit {
  constructor(
    private workoutService: WorkoutService,
    private fb: FormBuilder,
    private toast: ToastComponent,
    private router: Router,
  ) {
    addIcons({ add });
  }
  workouts!: WorkoutInterface[];
  workoutForm!: FormGroup;

  @ViewChild(IonModal) modal!: IonModal;

  confirm() {
    console.log('confirm');
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.router.navigate(['/'])

  }

  addWorkout() {
    if (this.workoutForm.valid) {
      this.workoutService
        .postData('exercise', this.workoutForm.value)
        .subscribe(
          (workout) => {
            console.log(workout);
            this.toast.setToast({
              label: 'Treino cadastrado com sucesso!',
              color: 'success',
              icon: 'checkbox',
            });
          },
          (error) => {
            console.error(error);
            this.toast.setToast({
              label: 'Erro ao cadastrar treino',
              color: 'danger',
              icon: 'close-cicle',
            });
          }
        );
    }
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('user');
    this.workoutService
      .findWorkoutsByUserId(`exercise/${userId}`)
      .subscribe((item) => {
        this.workouts = item;
      });

    this.workoutForm = this.fb.group({
      userId: +userId!,
      name: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      series: ['', [Validators.required]],
      repetitions: ['', [Validators.required]],
    });
  }
}
