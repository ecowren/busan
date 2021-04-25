import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
        
        ]
    }
]