import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonInput, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/Api/apicall.service';
import { catchError, of, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  imports: [IonButton, IonLabel, IonItem, IonCardContent, IonCardHeader,
     IonCardTitle, IonCard, IonInput, IonContent,RouterLink,ReactiveFormsModule,CommonModule
     ]
})
export class SigninComponent  implements OnInit {

  signinForm: FormGroup;
 $destroy = new Subject<void>();

  constructor(private fb: FormBuilder, 
    private ApiService: ApicallService,
  private router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginUser() {
    console.log('Sign-In Data:', this.signinForm.value);

    this.userLogin(this.signinForm.value);
  
  }
  userLogin(user:any){
    this.ApiService.login(user).pipe(
      takeUntil(this.$destroy),
      catchError((err) => {
        return of(null);
      })
    ).subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/user-dashboard']); 
      },
      error: (err) => {
        console.error('Error in subscription:', err);  // Fallback error handler
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }

  ngOnInit() {
    
      // localStorage.removeItem('token');
      }

}
