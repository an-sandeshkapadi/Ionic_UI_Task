import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { IonContent, IonText, IonSearchbar, IonInput, IonGrid, IonRow, IonCol, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonIcon, IonButton, IonImg, IonTab, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonTabs } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cashOutline, trendingUpOutline, repeatOutline, diamondOutline, library, playCircle, radio, search } from 'ionicons/icons';
let FinanicalComponent = class FinanicalComponent {
    constructor() {
        addIcons({ cashOutline, trendingUpOutline, repeatOutline, diamondOutline, library, playCircle, radio, search });
    }
    ngOnInit() { }
};
FinanicalComponent = __decorate([
    Component({
        selector: 'app-finanical',
        templateUrl: './finanical.component.html',
        styleUrls: ['./finanical.component.scss'],
        imports: [IonTabs, IonTabButton, IonTabBar, IonToolbar, IonTitle, IonHeader, IonTab, IonImg, IonButton, IonIcon, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCol, IonRow, IonGrid, IonInput, IonSearchbar, IonText, IonContent]
    })
], FinanicalComponent);
export { FinanicalComponent };
//# sourceMappingURL=finanical.component.js.map