import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @ViewChild('product') productComponent: ProductComponent;
  renderValues() {
    this.productComponent.renderValues();
  }
}
