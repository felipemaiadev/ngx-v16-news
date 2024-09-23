import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SynopticComponent } from './synoptic/synoptic.component';


const routes: Routes = [
   {path:'', component:SynopticComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisionModule { }
