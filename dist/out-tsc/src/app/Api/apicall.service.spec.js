import { TestBed } from '@angular/core/testing';
import { ApicallService } from './apicall.service';
describe('ApicallService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApicallService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=apicall.service.spec.js.map