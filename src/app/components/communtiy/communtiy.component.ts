import { Component, linkedSignal, OnInit } from '@angular/core';
import { IonContent, IonCardHeader, IonCardTitle, IonSearchbar, IonInput, IonGrid, IonRow, IonCol, IonCard, IonText, IonCardContent, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonCardSubtitle, IonImg } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { heart, wallet,chatbubble,arrowForward, server,videocam } from 'ionicons/icons';

@Component({
  selector: 'app-communtiy',
  templateUrl: './communtiy.component.html',
  styleUrls: ['./communtiy.component.scss'],
  imports: [IonImg, IonCardSubtitle, IonTitle, IonToolbar, IonHeader, IonButton, IonIcon, IonCardContent, IonText, IonCard, IonCol, IonRow, IonGrid, IonInput, IonSearchbar, IonCardTitle, IonContent, IonCardHeader],
})
export class CommuntiyComponent  implements OnInit {

  constructor() { 
    addIcons({wallet,heart,chatbubble,arrowForward,server,videocam})
  }

  ngOnInit() {}

}
