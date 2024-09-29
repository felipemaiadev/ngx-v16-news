import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';
import { SynopticComponent } from './synoptic/synoptic.component';
import { VisionRouterModule } from './vision-routing.module';
import { VisionHomeComponent } from './vision-home/vision-home.component';


@NgModule({
  declarations: [
    TableViewComponent,
    SynopticComponent,
    VisionHomeComponent
  ],
  imports: [

  ],
  exports:[VisionRouterModule],
  providers: [],
  bootstrap: []
})
export class VisionModule { }