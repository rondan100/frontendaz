import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Product[] = [
    {
      _id: '1',
      title: 'Test prodcty',
      price: 10,
      description: 'Test prodcty',
      image: 'http://via.placeholder.com/350x250',
      quantity: 5,
      createdAt: '1/1/2020',
    },
    {
      _id: '2',
      title: 'Test prodct2',
      price: 102,
      description: 'Test prodcty2',
      image: 'http://via.placeholder.com/350x250',
      quantity: 52,
      createdAt: '1/1/2020',
    },
  ];

  getProducts(): Observable<Product[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.products);
      }, 100);
    });
  }
}
