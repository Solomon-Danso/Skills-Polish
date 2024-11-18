import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [

  {
    path: 'user/:id',
    title: 'App User Page',
    component: UsersComponent,
  },

];
