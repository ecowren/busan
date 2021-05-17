import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService, localStorageName, SignIn } from '../shared'

@Component({
    templateUrl: 'sign-in.component.html'
})

export class SignInComponent {

    account: SignIn = new SignIn();
    isLoading: boolean = false;
    isAccountAuthFailed: boolean = false;
    isRemembered: boolean = false;


    constructor(private authService: AuthService, private router: Router) {
    }


    ngOnInit() {
        this.authService.signOut();
        let accountName: string = localStorage.getItem(localStorageName.accountName);
        if (accountName) {
            this.account.name = accountName;
            this.isRemembered = true;
        }
    }


    signIn() {
        console.log("click sign in button");

        if (this.isRemembered) {
            localStorage.setItem(localStorageName.accountName, this.account.name);
        }
    }

}