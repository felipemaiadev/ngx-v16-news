import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './main/+template/base/base.component';
import { SynopticComponent } from './@vision/synoptic/synoptic.component';
import { ComposedMenuComponent } from './main/+template/composed-menu/composed-menu.component';


const routes: Routes = [
   {path:'', component:ComposedMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
