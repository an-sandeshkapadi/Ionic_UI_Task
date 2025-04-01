import { TestBed } from '@angular/core/testing';
import { authInterceptor } from './auth.interceptor';
describe('authInterceptor', () => {
    const interceptor = (req, next) => TestBed.runInInjectionContext(() => authInterceptor(req, next));
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });
    it('should be created', () => {
        expect(interceptor).toBeTruthy();
    });
});
//# sourceMappingURL=auth.interceptor.spec.js.map