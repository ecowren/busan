import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService, localStorageName } from 'src/app/shared';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';

export class MockRouter {
}

export class MockAuthService {
    signOut(): void { }
}

describe('SignInComponent Test', () => {
    let underTest: SignInComponent;
    let mockRouter = new MockRouter();
    const mockAuthService = new MockAuthService();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: Router, useValue: mockRouter },
                { provice: AuthService, useValue: mockAuthService }
            ]
        });
    });

    beforeEach(inject([AuthService, Router],
        (authService: AuthService, router: Router) => {
            underTest = new SignInComponent(authService, router);
        }));

    afterEach(() =>{
        localStorage.clear();
    })

    it("Method ngOnInit should not set account name when accountName does not exist", () => {
        //given
        spyOn(mockAuthService, 'signOut').and.stub();

        //when
        underTest.ngOnInit();

        //then
        expect(underTest.account.name).toBeNull();
        expect(underTest.isRemembered).toBeFalsy();
    });


    it("Method ngOnInit should set account name when accountName exists", () => {
        //given
        spyOn(mockAuthService, 'signOut').and.stub();
        localStorage.setItem(localStorageName.accountName, "user1");

        //when
        underTest.ngOnInit();

        //then
        expect(underTest.account.name).toBe(localStorage.getItem(localStorageName.accountName));
        expect(underTest.isRemembered).toBeTruthy();
    });


    it("Method signIn should set account name when isRemembered is true", () => {
        //given
        underTest.isRemembered = true;
        underTest.account.name = "user";

        //when
        underTest.ngOnInit();

        //then
        expect(localStorage.getItem(localStorageName.accountName)).toBe(underTest.account.name);
    });
});
