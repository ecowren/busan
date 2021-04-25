import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
    templateUrl: 'sign-up.component.html'
})

export class SignUpComponent {

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }


    ngOnInit() { }

}