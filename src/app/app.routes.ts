import { Routes } from '@angular/router';
import { BrugerOprettelse } from '../components/bruger-oprettelse/bruger-oprettelse';
import { Booking } from '../components/booking/booking';
import { Admin } from '../components/admin/admin';

export const routes: Routes = [
    { path: 'test', component: BrugerOprettelse },
    { path: 'booking', component: Booking },
    { path: 'admin', component: Admin }
];

