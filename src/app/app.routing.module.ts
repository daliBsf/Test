import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, ExtraOptions, RouterModule } from '@angular/router';
const routes: Routes = [
  {
      path: 'auth',
      loadChildren: './modules/auth/auth.module#AuthModule',
    },
    { path: '', redirectTo: 'auth' , pathMatch:'full'}
  ];
  
  const config: ExtraOptions = {
    useHash: true,
  };
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }