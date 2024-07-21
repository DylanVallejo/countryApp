import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    // RouterLink,
    // RouterOutlet,
    // RouterLinkActive
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactPageComponent
  ]
})
export class SharedModule { }
