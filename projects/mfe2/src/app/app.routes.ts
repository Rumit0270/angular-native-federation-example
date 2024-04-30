import { Routes } from '@angular/router';
import { LoremComponent } from './lorem/lorem.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'details',
    component: LoremComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
