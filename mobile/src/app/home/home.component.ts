import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonFabButton,
  IonIcon,
  IonImg,
  IonInput,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbell } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'home-component',
  templateUrl: './home.component.html',
  imports: [IonContent, IonText, IonFabButton, IonButton, IonInput, IonImg, IonIcon, RouterLink],
})
export class HomeComponent {
  constructor() {
    addIcons({barbell})
  }
}
