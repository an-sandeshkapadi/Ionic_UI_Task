import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonItem, IonButton, IonTextarea, IonInput, IonAccordion, IonAccordionGroup } from '@ionic/angular/standalone';
let SupportPage = class SupportPage {
    constructor() {
        this.selectedSegment = 'help';
        this.supportForm = {
            name: '',
            email: '',
            message: ''
        };
    }
    ngOnInit() {
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
        console.log(this.selectedSegment);
    }
    supportData() {
    }
};
SupportPage = __decorate([
    Component({
        selector: 'app-support',
        templateUrl: './support.page.html',
        styleUrls: ['./support.page.scss'],
        standalone: true,
        imports: [IonAccordionGroup, IonAccordion, IonInput, IonTextarea, IonButton, IonItem, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
    })
], SupportPage);
export { SupportPage };
//# sourceMappingURL=support.page.js.map