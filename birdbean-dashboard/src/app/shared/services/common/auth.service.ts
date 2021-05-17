import { Injectable } from "@angular/core";
import { localStorageName } from "../../constants";

@Injectable()
export class AuthService {

    /**
     * Delete user auth info
     * @returns {void}
     */
    signOut(): void {
        localStorage.removeItem(localStorageName.accountId);
    }
}