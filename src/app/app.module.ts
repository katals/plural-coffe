import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ButtonComponent, SliderComponent } from './components/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    SliderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
