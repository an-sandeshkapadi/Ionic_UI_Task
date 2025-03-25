import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle,IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.scss'],
  imports: [IonButton, IonInput, IonLabel, IonItem, IonCardContent,
     IonCardTitle, IonCardHeader, IonCard, IonHeader, 
     IonToolbar, IonTitle,IonContent,
    RouterLink,
  ]
})
export class SinupComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
