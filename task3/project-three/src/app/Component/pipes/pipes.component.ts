import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  price: number = 1500;
  currency: string = 'EGP';

  toggleCurrency() {
    this.currency = this.currency === 'EGP' ? 'USD' : 'EGP';
  }
  transformPrice() {
    return this.currency === 'EGP' ? this.price : this.price * 50;
  }

}
