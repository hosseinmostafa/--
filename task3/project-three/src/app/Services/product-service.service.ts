// services/product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];

  getAllProducts(): any[] {
    return this.products;
  }

  getProductById(prdId: number): any {
    if (typeof prdId !== 'number') {
      return null;
    }
    const product = this.products.find(p => p.id === prdId);
    return product || null;
  }

}
