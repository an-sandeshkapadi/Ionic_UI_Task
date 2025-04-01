import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";
let SinupComponent = class SinupComponent {
    constructor(fb, ApiService) {
        this.fb = fb;
        this.ApiService = ApiService;
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
        }
        else {
            console.log('Form is invalid');
        }
    }
    createUser(user) {
        this.ApiService.newUser(user).subscribe((response) => {
            console.log('Data received:', response);
        });
    }
    ngOnInit() { }
};
SinupComponent = __decorate([
    Component({
        selector: 'app-sinup',
        templateUrl: './sinup.component.html',
        styleUrls: ['./sinup.component.scss'],
        imports: [IonButton, IonInput, IonLabel, IonItem, IonCardContent,
            IonCardTitle, IonCardHeader, IonCard, IonHeader,
            IonToolbar, IonTitle, IonContent,
            RouterLink,
            ReactiveFormsModule, CommonModule
        ]
    })
], SinupComponent);
export { SinupComponent };
//# sourceMappingURL=sinup.component.js.map