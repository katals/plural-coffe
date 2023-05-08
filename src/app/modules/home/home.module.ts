import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SliderComponent, ButtonComponent, ProductCardComponent } from '../../components';
import { TestimonialsComponent } from 'src/app/components/testimonials/testimonials.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProductCardComponent,
    SliderComponent,
    ButtonComponent,
    TestimonialsComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
