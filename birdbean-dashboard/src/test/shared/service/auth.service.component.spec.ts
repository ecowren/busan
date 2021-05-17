import { inject, TestBed } from '@angular/core/testing';
import { AuthService, localStorageName } from 'src/app/shared';

export class MockRouter {
}

export class MockAuthService {
    signOut(): void { }
}

describe('AuthService Test', () => {
    let underTest: AuthService;

    beforeEach(inject([],
        () => {
            underTest = new AuthService();
        }));

    it("Method signOut should remove accout name when called", () => {
        //when
        underTest.signOut();

        //then
        expect(localStorage.getItem(localStorageName.accountName)).toBeNull;
    });
});
