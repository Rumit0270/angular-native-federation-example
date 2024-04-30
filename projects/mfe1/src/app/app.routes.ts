import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
