import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';
import { SynopticComponent } from './synoptic/synoptic.component';


@NgModule({
  declarations: [
    TableViewComponent,
    SynopticComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports:[],
  providers: [],
  bootstrap: []
})
export class VisionModule { }