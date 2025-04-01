import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ApicallService = class ApicallService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "http://localhost:3000/api/users";
    }
    newUser(data) {
        return this.http.post(this.apiUrl + '/', data);
    }
    login(data) {
        return this.http.post(this.apiUrl + '/login', data);
    }
    logout() {
        return this.http.get(this.apiUrl + '/logout');
    }
};
ApicallService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApicallService);
export { ApicallService };
//# sourceMappingURL=apicall.service.js.map