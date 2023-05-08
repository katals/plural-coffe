import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

import { ButtonComponent } from '../button'

@Component({
  selector: 'ngbd-carousel-navigation',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor, ButtonComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() showText = true;
  @Input() showButton = true;
  @Input() images: string[] = [''];
  pauseOnHover = false;
  pauseOnFocus = false;
  showNavigationIndicators = false;
  showNavigationArrows = false;
  // [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
