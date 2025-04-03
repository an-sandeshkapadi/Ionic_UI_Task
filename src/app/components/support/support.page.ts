import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonItem, IonButton, IonTextarea, IonInput, IonAccordion, IonAccordionGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
  standalone: true,
  imports: [IonAccordionGroup, IonAccordion, IonInput, IonTextarea, IonButton, IonItem, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SupportPage implements OnInit {
  selectedSegment: string = 'help';
  supportForm = {
    name: '',
    email: '',
    message: ''
  };
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event:any){
    this.selectedSegment = event.detail.value;
    console.log(this.selectedSegment);

  }

  supportData(){
    
  }

}
