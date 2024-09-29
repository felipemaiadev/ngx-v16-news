import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './main/+template/base/base.component';
import { SynopticComponent } from './@vision/synoptic/synoptic.component';
import { ComposedMenuComponent } from './main/+template/composed-menu/composed-menu.component';
import { AuthValidationGuard } from './main/AuthValidation/auth-validation';
import { LoginComponent } from './main/login/login.component';


const routes: Routes = [
   { path:'', component:ComposedMenuComponent, canActivate:[AuthValidationGuard]},
   { path:'menu', component:ComposedMenuComponent, canActivate:[AuthValidationGuard]},
   { path:'login', component:LoginComponent, canActivate:[AuthValidationGuard]},
   { path:'vision', 
       loadChildren: () => import('./@vision/vision.module').then(m => m.VisionModule),
       canActivateChild:[AuthValidationGuard]
    }
  //  { path:'**', component:ComposedMenuComponent, canActivate:[AuthValidationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
