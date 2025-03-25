import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle,IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";
import { ApicallService } from 'src/app/Api/apicall.service';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.scss'],
  imports: [IonButton, IonInput, IonLabel, IonItem, IonCardContent,
     IonCardTitle, IonCardHeader, IonCard, IonHeader, 
     IonToolbar, IonTitle,IonContent,
    RouterLink,
    ReactiveFormsModule,CommonModule
  ]
})
export class SinupComponent  implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private ApiService: ApicallService) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Sign-Up Data:', this.signupForm.value);
      this.createUser(this.signupForm.value);
      this.signupForm.reset();  
    } else {
      console.log('Form is invalid');
    }
  }
  createUser(user:any){
    this.ApiService.newUser(user).subscribe(
            (response) => {
              console.log('Data received:', response);
            }
          );

  }

  ngOnInit() {}
   
}
