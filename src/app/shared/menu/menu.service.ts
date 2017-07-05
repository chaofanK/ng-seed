import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Menu } from './menu';

@Injectable()
export class MenuService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get('./assets/menu-mock.json')
              .map(response => {
                return response.json();
              });
  }
}
