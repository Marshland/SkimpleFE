import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../category.model';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-categories-carousel',
  templateUrl: './categories-carousel.component.html',
  styleUrls: ['./categories-carousel.component.scss']
})
export class CategoriesCarouselComponent implements OnInit {
  categories: Partial<Category>[];
  carouselTile: NguCarouselConfig;

  @ViewChild('carousel')
  carousel: NguCarousel<any>;

  constructor() {}

  ngOnInit() {
    this.categories = [
      { title: 'Industria e Scienza', imgPath: './assets/images/categories/industria_scienza.svg', icon: 'industry-science' },
      { title: 'Alimentari', imgPath: './assets/images/categories/food.png' },
      { title: 'Salute e cura della Persona', imgPath: './assets/images/categories/perfume.png' },
      { title: 'pulizia e cura della casa', imgPath: './assets/images/categories/cleaning.png' },
      { title: 'Abbigliamento', imgPath: './assets/images/categories/clothing.png' },
      { title: 'Libri', imgPath: './assets/images/categories/books.png' },
      { title: 'Sport e tempo libero', imgPath: './assets/images/categories/sport.png' },
      { title: 'Gioielli', imgPath: './assets/images/categories/jewelry.png' },
      { title: 'Informatica', imgPath: './assets/images/categories/tech.png' }
    ];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    };
  }

  moveToSlide() {
    this.carousel.moveTo(2, false);
  }
}
