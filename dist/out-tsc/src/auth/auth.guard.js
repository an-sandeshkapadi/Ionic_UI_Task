import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const authGuard = (route, state) => {
    const isTokenAvailable = localStorage.getItem('token');
    const router = inject(Router);
    if (!isTokenAvailable) {
        router.navigate(['/']);
        return false;
    }
    return true;
};
//# sourceMappingURL=auth.guard.js.map