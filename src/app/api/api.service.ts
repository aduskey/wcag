import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Item[]>(
      'https://my-json-server.typicode.com/aduskey/wcag/items'
    );
  }
}
