import { Routes } from '@angular/router';
import { BrugerOprettelse } from '../pages/bruger-oprettelse/bruger-oprettelse';
import { Booking } from '../pages/booking/booking';
import { Admin } from '../pages/admin/admin';
import { LoginPage } from '../pages/login-page/login-page';

export const routes: Routes = [
    { path: 'Oprettelse', component: BrugerOprettelse },
    { path: 'booking', component: Booking },
    { path: 'admin', component: Admin },
    { path: '', component: LoginPage }
];

