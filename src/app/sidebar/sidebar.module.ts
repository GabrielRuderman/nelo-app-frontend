import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';



@NgModule({
  declarations: [
    SidebarLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarLayoutComponent
  ]
})
export class SidebarModule { }
