import { Routes } from '@angular/router';
import { FinanicalComponent } from './components/finanical/finanical.component';
import { CommuntiyComponent } from './components/communtiy/communtiy.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'financial',
    component: FinanicalComponent
  },
  {
    path:'community',
    component: CommuntiyComponent
  }
];
