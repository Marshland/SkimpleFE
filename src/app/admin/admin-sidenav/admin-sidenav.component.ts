import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../navigation/menu-item.model';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {
  menuItems: Partial<MenuItem>[] = [
    {
      title: 'Ricerca prodotti',
      url: 'search-products',
      icon: 'search'
    },
    {
      title: 'Categorie',
      url: 'build-categories',
      icon: 'category'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
