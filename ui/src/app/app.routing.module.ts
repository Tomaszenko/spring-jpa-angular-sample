import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {authRoutes} from "./auth/auth.routes";
import {NotFoundComponent} from "./not-found.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    children: [
      ...authRoutes
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
