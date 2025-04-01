import { __decorate } from "tslib";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonContent, IonCardHeader, IonCardTitle, IonSearchbar, IonInput, IonGrid, IonRow, IonCol, IonCard, IonText, IonCardContent, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonCardSubtitle, IonImg } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { heart, wallet, chatbubble, arrowForward, server, videocam } from 'ionicons/icons';
let CommuntiyComponent = class CommuntiyComponent {
    constructor() {
        // slideOpts: SwiperOptions = {
        //   slidesPerView: 1.5, // Adjust to show partial next card
        //   spaceBetween: 10, // Space between cards
        //   centeredSlides: false,
        //   loop: false,
        //   navigation: true, // Enable navigation buttons (optional)
        //   pagination: { clickable: true }, // Enable pagination (optional)
        // };
        this.cards = [
            { title: 'Card 1', content: 'This is card 1' },
            { title: 'Card 2', content: 'This is card 2' },
            { title: 'Card 3', content: 'This is card 3' },
            { title: 'Card 4', content: 'This is card 4' },
            { title: 'Card 5', content: 'This is card 5' }
        ];
        addIcons({ wallet, heart, chatbubble, arrowForward, server, videocam });
    }
    ngOnInit() { }
};
CommuntiyComponent = __decorate([
    Component({
        selector: 'app-communtiy',
        templateUrl: './communtiy.component.html',
        styleUrls: ['./communtiy.component.scss'],
        imports: [CommonModule, IonImg, IonCardSubtitle, IonTitle, IonToolbar, IonHeader, IonButton, IonIcon,
            IonCardContent, IonText, IonCard, IonCol, IonRow, IonGrid, IonInput, IonSearchbar, IonCardTitle,
            IonContent, IonCardHeader],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], CommuntiyComponent);
export { CommuntiyComponent };
//# sourceMappingURL=communtiy.component.js.map