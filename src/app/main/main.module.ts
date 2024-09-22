import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './+template/navbar/navbar.component';
import { SidebarComponent } from './+template/sidebar/sidebar.component';
import { ComposedMenuComponent } from './+template/composed-menu/composed-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ComposedMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ]
})
export class MainModule { }
