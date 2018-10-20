import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
  carouselBanner: NguCarouselConfig;
  carouselBanners = ['./assets/images/banner/banner_1.svg', './assets/images/banner/banner_2.png'];
  constructor() {}

  ngOnInit() {
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: { timing: 4000 },
      point: {
        visible: true
      },
      load: 1,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }
}
