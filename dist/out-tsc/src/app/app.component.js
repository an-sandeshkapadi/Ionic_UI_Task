import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButtons, IonList, IonToolbar, IonTitle, IonButton, IonIcon, IonItem, IonHeader, IonTab, IonContent, IonTabs, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { register } from 'swiper/element/bundle';
register();
let AppComponent = class AppComponent {
    constructor() {
        addIcons({});
    }
    openMenu() {
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        imports: [IonTabBar, IonTabButton, IonTabs, IonContent, IonTab, IonHeader, IonItem, IonIcon, IonButton, IonTitle, IonToolbar, IonList, IonButtons, IonApp, IonRouterOutlet, IonList],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map