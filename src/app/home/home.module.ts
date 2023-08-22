import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
  ]
})
export class HomeModule { }
