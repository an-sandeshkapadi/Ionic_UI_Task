import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
//import { AuthService } from './auth.service';
let AuthInterceptor = class AuthInterceptor {
    constructor( /*private authService: AuthService*/) { }
    intercept(req, next) {
        const authToken = localStorage.getItem('token') || '';
        if (authToken) {
            // Clone the request and attach the token
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            return next.handle(authReq);
        }
        // If there is no token, pass the original request
        return next.handle(req);
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map