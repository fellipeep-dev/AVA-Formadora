import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonNavLink,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  barbell,
  closeOutline,
  exitOutline,
  personCircleOutline,
  settingsOutline,
} from 'ionicons/icons';
import { AuthService } from 'src/core/services/auth.service';
import { ToastComponent } from '../toast.component';
import { menuHeader } from '../../data/header.data';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    IonText,
    IonLabel,
    IonItem,
    IonList,
    IonTitle,
    IonIcon,
    IonToolbar,
    IonHeader,
    IonAvatar,
    IonButtons,
    IonButton,
    IonMenuToggle,
    IonMenu,
    IonContent,
    IonMenuButton,
    IonNavLink,
    RouterLink,
    NgFor,
  ],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private toast: ToastComponent, private router: Router) {
    addIcons({
      personCircleOutline,
      closeOutline,
      settingsOutline,
      exitOutline,
      barbell
    });
  }

  handleLogout(){
    this.toast.setToast({
      label: "Usuario desconectado",
      color: "secondary",
      icon: "information-circle"
    })
    this.authService.logout()
    this.router.navigate(['/begin'])
  }

  items = menuHeader;

  avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}