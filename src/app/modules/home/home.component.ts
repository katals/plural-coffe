import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imagesRoute: string = './assets/images';
  imagesArray: string[] = [
    `${this.imagesRoute}/slider-photo.jpg`,
    `${this.imagesRoute}/slider-photo2.jpg`,
    `${this.imagesRoute}/slider-photo3.jpg`
  ]
}
