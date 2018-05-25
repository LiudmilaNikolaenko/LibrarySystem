import { TestBed, inject } from '@angular/core/testing';
import { ApiRequestService } from './api-request.service';

describe('ApiRequestService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApiRequestService],
        });
    });

    it( 'should be created api-request-service',
        inject([ApiRequestService], (service: ApiRequestService) => {
            expect(service).toBeTruthy();
        })
    );
});