import { Routes } from '@angular/router';
import { FinanicalComponent } from './components/finanical/finanical.component';
import { CommuntiyComponent } from './components/communtiy/communtiy.component';
import { SinupComponent } from './components/sinup/sinup.component';
import { SigninComponent } from './components/signin/signin.component';

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
  },
  {
    path:'signup',
    component: SinupComponent,
    // canActivate: [AuthGuard] // add authentication guard
    // data: { requiredRole: 'admin' } // add role-based authorization
    // children: [
    //   { path: 'admin', component: AdminComponent },
    //   { path: 'user', component: UserComponent },
    // ]
    // canActivateChild: [AuthGuard], // add authentication guard for child routes
    // data: { requiredRole: 'admin' } // add role-based authorization for child routes
    // children:[
    //   {
    //     path:'signin',
    //     component: SigninComponent
    //   }
    // ]
  },
  {
    path:'signin',
    component: SigninComponent
  }
];
