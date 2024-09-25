import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fliter'
})
export class FliterPipe implements PipeTransform {

  transform(products: any[], searchTerm: string): any[] {
    if (!products) return [];

    if (!searchTerm) return products;

    searchTerm = searchTerm.toLowerCase();
    
    return products.filter(product => {
      return product.toLowerCase().includes(searchTerm);
    });
  }

}
