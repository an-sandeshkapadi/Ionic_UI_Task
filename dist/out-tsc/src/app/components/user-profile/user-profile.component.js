import { __decorate } from "tslib";
import { Component } from '@angular/core';
// import {  IonIcon } from '@ionic/angular';
import { IonButton, IonContent } from '@ionic/angular/standalone';
let UserProfileComponent = class UserProfileComponent {
    // private router : Inject(Router);
    constructor(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
    }
    logOut() {
        this.router.navigate(['/signin']);
        //  this.logOuttoken();
        localStorage.removeItem('token');
    }
    logOuttoken() {
        this.ApiService.logout().subscribe((response) => {
            console.log('Logout Successful:', response);
            ;
            // navigate to login page
        }, (error) => {
            console.error('Logout Failed:', error);
        });
    }
    ngOnInit() { }
};
UserProfileComponent = __decorate([
    Component({
        selector: 'app-user-profile',
        templateUrl: './user-profile.component.html',
        styleUrls: ['./user-profile.component.scss'],
        imports: [IonButton, IonContent]
    })
], UserProfileComponent);
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map