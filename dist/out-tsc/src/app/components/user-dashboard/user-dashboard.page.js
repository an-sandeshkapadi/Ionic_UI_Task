import { __decorate } from "tslib";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon, IonTitle, IonToolbar, IonHeader, IonContent, IonList, IonLabel, IonItem, IonButtons } from "@ionic/angular/standalone";
let UserDashboardPage = class UserDashboardPage {
    constructor(router) {
        this.router = router;
        this.menuOpen = false;
        this.menuItems = [
            { label: 'Dashboard', link: '/dashboard' },
            { label: 'Profile', link: '/profile' },
            { label: 'Settings', link: '/settings' },
            { label: 'Help', link: '/help' }
        ];
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
    logout() {
        console.log('User logged out');
        this.router.navigate(['/login']);
    }
};
UserDashboardPage = __decorate([
    Component({
        selector: 'app-user-dashboard',
        templateUrl: './user-dashboard.page.html',
        styleUrls: ['./user-dashboard.page.scss'],
        imports: [IonButtons, IonItem, IonLabel, IonList, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, RouterLink],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], UserDashboardPage);
export { UserDashboardPage };
//# sourceMappingURL=user-dashboard.page.js.map