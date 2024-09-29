import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import { Product } from './product';
import * as console from "console";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Just enough here for the code to compile
  private productsUrl = 'api/products';

  //inject HttpClient using inject method
  private http = inject(HttpClient);

  // getProducts method
  getProducts(): Observable<Product[]> {
    // pipe tap console message 'In services'
    console.log('In services');
    let data;
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(data => console.log('data returned in service '))
      )
  }

}
