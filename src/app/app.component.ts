import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButtons, IonList, IonToolbar, IonTitle, IonButton, IonIcon, IonItem, IonHeader, IonTab, IonContent, IonTabs, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonTabBar, IonTabButton, IonTabs, IonContent, IonTab, IonHeader, IonItem, IonIcon, IonButton, IonTitle, IonToolbar, IonList, IonButtons, IonApp, IonRouterOutlet, IonList],
})
export class AppComponent {
  constructor() {
    addIcons({ });

  }

  openMenu() {

  }
}
