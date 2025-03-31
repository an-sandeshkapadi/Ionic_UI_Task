import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonIcon, IonTitle, IonToolbar, IonHeader, IonContent, IonList, IonLabel, IonItem, IonButtons } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { close, help, menu, person, settings, speedometer } from 'ionicons/icons';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
  imports: [IonButtons, IonItem, IonLabel, IonList, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserDashboardPage implements OnInit {
  menuOpen = false;

  menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Profile', link: '/profile' },
    { label: 'Settings', link: '/settings' },
    { label: 'Help', link: '/help' }
  ];
menuContent: any;

  constructor(private router: Router) {}
ngOnInit(): void {
  
}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
