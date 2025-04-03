import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) {
        console.log('User is authenticated');
        return true;
    } else {
        router.navigate(['account/register']).then(r => {
            console.log('Redirected to register page');
        });
        return false;
    }
};
