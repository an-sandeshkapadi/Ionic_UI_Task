import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonInput, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";
import { catchError, of, Subject, takeUntil } from 'rxjs';
let SigninComponent = class SigninComponent {
    constructor(fb, ApiService, router) {
        this.fb = fb;
        this.ApiService = ApiService;
        this.router = router;
        this.$destroy = new Subject();
        this.signinForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    loginUser() {
        console.log('Sign-In Data:', this.signinForm.value);
        this.userLogin(this.signinForm.value);
    }
    userLogin(user) {
        this.ApiService.login(user).pipe(takeUntil(this.$destroy), catchError((err) => {
            return of(null);
        })).subscribe({
            next: (data) => {
                console.log(data);
                localStorage.setItem('token', data.token);
                this.router.navigate(['/user-dashboard']);
            },
            error: (err) => {
                console.error('Error in subscription:', err); // Fallback error handler
            },
            complete: () => {
                console.log('Observable completed');
            }
        });
    }
    ngOnInit() {
        // localStorage.removeItem('token');
    }
};
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss'],
        imports: [IonButton, IonLabel, IonItem, IonCardContent, IonCardHeader,
            IonCardTitle, IonCard, IonInput, IonContent, RouterLink, ReactiveFormsModule, CommonModule
        ]
    })
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map