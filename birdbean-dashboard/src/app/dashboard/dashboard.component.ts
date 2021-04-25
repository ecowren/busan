import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }


    ngOnInit() { }

}