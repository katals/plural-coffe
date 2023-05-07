import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent, ButtonComponent } from '../../components';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    SliderComponent,
  ]
})
export class HomeModule { }
