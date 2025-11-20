import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { RouterModule } from '@angular/router';
import { ComposedMenuComponent } from './+template/composed-menu/composed-menu.component';
import { NavbarComponent } from './+template/navbar/navbar.component';
import { SidebarComponent } from './+template/sidebar/sidebar.component';
import { BaseComponent } from './+template/base/base.component';
import { VisionModule } from '../@vision/vision.module';
import { MatIconModule } from '@angular/material/icon';


const LAYOUT_REF = [
   NavbarComponent,
   SidebarComponent,
   ComposedMenuComponent,
   BaseComponent
];


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ComposedMenuComponent,
    BaseComponent
 ]
    ,
  imports: [
    CommonModule,
    RouterModule,
    VisionModule,
    MatIconModule
  ],
  exports:
  [
    NavbarComponent,
    SidebarComponent,
    ComposedMenuComponent,
    BaseComponent
 ]
  
})
export class MainModule { }
