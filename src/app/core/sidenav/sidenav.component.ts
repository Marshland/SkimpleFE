import { Component } from '@angular/core';

import { LayoutService } from '../../shared/layout.service';
import { Category } from '../../home/category.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  categories: Partial<Category>[] = [
    { title: 'Alimentari', children: [] },
    { title: 'Salute e cura della Persona', children: [] },
    { title: 'pulizia e cura della casa', children: [] },
    { title: 'Casa & Cucina', children: [] },
    { title: 'Abbigliamento', children: [] },
    { title: 'DVD e Blu - ray', children: [] },
    { title: 'Sport e tempo libero', children: [] },
    { title: 'Elettronica', children: [] },
    { title: 'Informatica', children: [] },
    { title: 'Cancelleria e prodotti per ufficio', children: [] },
    { title: 'Prodotti per animali domestici', children: [] },
    { title: 'Giochi e giocattoli', children: [] },
    { title: 'Bellezza', children: [] },
    { title: 'Scarpe e borse', children: [] },
    { title: 'Gioielli', children: [] },
    { title: 'Videogiochi', children: [] },
    { title: 'Buoni regalo', children: [] },
    { title: 'Fai da te', children: [] },
    { title: 'Valigeria', children: [] },
    { title: 'Illuminazione', children: [] },
    { title: 'Libri', children: [] },
    { title: 'Auto e moto', children: [] },
    { title: 'Strumenti musicali', children: [] },
    { title: 'Prima infanzia', children: [] }
  ];

  constructor(private layoutService: LayoutService) {}
}
