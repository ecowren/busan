import { Routes } from '@angular/router'
import { DashboardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
];