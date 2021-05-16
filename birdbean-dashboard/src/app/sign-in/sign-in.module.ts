import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared';
import { BaseModule } from '../shared/modules/base.module';
import { SignInComponent } from './sign-in.component';

@NgModule({
    imports: [
        FormsModule
    ],
    providers:[AuthService],
    declarations: [SignInComponent],
    exports: [SignInComponent]
})

export class SignIndModule {
}