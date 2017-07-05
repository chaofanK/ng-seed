import { Component, OnInit } from '@angular/core';

import { Menu } from './shared/menu/menu';
import { MenuService } from './shared/menu/menu.service';

import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menus: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(): void {
    this.menuService.getMenus().subscribe(menus => this.menus = menus);
  }
}
