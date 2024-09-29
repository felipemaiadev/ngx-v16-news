import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SynopticComponent } from './synoptic/synoptic.component';
import { TableViewComponent } from './table-view/table-view.component';
import { VisionHomeComponent } from './vision-home/vision-home.component';


const routes: Routes = [
  { path:'', component:VisionHomeComponent,
    children: [
      {path:'synotic', component:SynopticComponent},
      {path:'table-watch', component: TableViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisionRouterModule { }
