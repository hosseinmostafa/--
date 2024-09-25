import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product-service.service';

@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrl: './prodect.component.scss'
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  renderValues() {
    this.products = this.productService.getAllProducts();
  }
}
