import { inject, TestBed } from '@angular/core/testing';
import { AuthService, localStorageName } from 'src/app/shared';

describe('AuthService Test', () => {
    let underTest: AuthService;

    beforeEach(inject([],
        () => {
            underTest = new AuthService();
        }));

        afterEach(() =>{
            localStorage.clear();
        })

    it("Method signOut should remove accout name when called", () => {
        //given
        localStorage.setItem(localStorageName.accountId, "user1");

        //when
        underTest.signOut();

        //then
        expect(localStorage.getItem(localStorageName.accountId)).toBeNull();
    });
});
