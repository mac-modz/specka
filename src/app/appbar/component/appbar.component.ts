import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {
    loggedIn = false;
    constructor(private authService: AuthService) {}

    ngOnInit() {}

    logout() {
        this.authService.logout();
    }

    login() {
        this.authService.login();
    }

    isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }
}
