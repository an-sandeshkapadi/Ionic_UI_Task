import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
let UserInfoPage = class UserInfoPage {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.user = {
            profileImage: '',
            username: '',
            email: '',
            password: '',
        };
    }
    ngOnInit() {
        this.loadUserInfo();
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.user.profileImage = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
    saveUserInfo() {
        if (!this.user.username || !this.user.email || !this.user.password) {
            this.showToast('All fields are required!', 'danger');
            return;
        }
        localStorage.setItem('userInfo', JSON.stringify(this.user));
        this.showToast('User info saved successfully!', 'success');
    }
    loadUserInfo() {
        const storedUser = localStorage.getItem('userInfo');
        if (storedUser) {
            this.user = JSON.parse(storedUser);
        }
    }
    async showToast(message, color) {
        const toast = await this.toastCtrl.create({
            message,
            duration: 2000,
            color,
        });
        await toast.present();
    }
};
UserInfoPage = __decorate([
    Component({
        selector: 'app-user-info',
        standalone: true,
        imports: [IonicModule, CommonModule, FormsModule],
        templateUrl: './user-info.page.html',
        styleUrls: ['./user-info.page.scss'],
    })
], UserInfoPage);
export { UserInfoPage };
//# sourceMappingURL=user-info.page.js.map