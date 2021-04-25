import { Routes } from '@angular/router'
import { SignUpRoutes } from './sign-up/sign-up.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    ...SignUpRoutes
];