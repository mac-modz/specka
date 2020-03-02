import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './pages/home/container/home-container.component';
import { ErrorComponent } from './pages/error/error.component';
import { UserProfileContainerComponent } from './pages/user-profile/container/user-profile-container.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeContainerComponent
    },
    {
        path: 'user-profile',
        component: UserProfileContainerComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'callback',
        component: CallbackComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
