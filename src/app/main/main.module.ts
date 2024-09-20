import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './+template/navbar/navbar.component';
import { SidebarComponent } from './+template/sidebar/sidebar.component';
import { ComposedMenuComponent } from './+template/composed-menu/composed-menu.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ComposedMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
