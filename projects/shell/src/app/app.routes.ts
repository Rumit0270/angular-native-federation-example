import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'mfe1',
  //   loadComponent: () =>
  //     loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  // },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.routes),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe2',
        exposedModule: './Module',
      }).then((m) => m.routes),
  },
];
