import { Routes } from '@angular/router'
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { SignInRoutes } from './sign-in/sign-in.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    ...SignInRoutes,
    ...DashboardRoutes
];