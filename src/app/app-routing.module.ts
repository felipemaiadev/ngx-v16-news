import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './main/+template/base/base.component';
import { SynopticComponent } from './@vision/synoptic/synoptic.component';


const routes: Routes = [
   {path:'', component:SynopticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
