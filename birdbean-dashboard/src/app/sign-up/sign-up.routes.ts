import { Route } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

export const SignUpRoutes: Route[] = [
    {
        path: 'sign-up',
        children: [
            {
                path: '',
                component: SignUpComponent,
                pathMatch: 'full'
            }
        ]
    }
]