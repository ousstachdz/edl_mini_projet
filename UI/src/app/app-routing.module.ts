import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRouteGuard } from './shared/guard/auth.route.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./home/home.module').then(_=>_.HomeModule)
  },
  {
    path:'login',
    loadChildren:()=> import('./login/login.module').then(_=>_.LoginModule),
    canActivate: [AuthRouteGuard]
  },
  {
    path:'profil',
    loadChildren:()=> import('./profil/profil.module').then(_=>_.ProfilModule),
    canActivate: [AuthRouteGuard]
  },
  {
    path:'page_not_found',
    loadChildren:()=> import('./page_not_found/page_not_found.module').then(_=>_.Page_not_foundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
