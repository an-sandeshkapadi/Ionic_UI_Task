import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonInput, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  imports: [IonButton, IonLabel, IonItem, IonCardContent, IonCardHeader,
     IonCardTitle, IonCard, IonInput, IonContent,RouterLink ]
})
export class SigninComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
