import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone',
      price: 999,
      description: 'Latest Apple smartphone with advanced features.',
      category: 'Electronics',
      imageUrl: 'https://example.com/images/iphone.jpg',
      stock: 25,
      rating: 4.7
    },
    {
      name: 'PlayStation 5',
      price: 499,
      description: 'Next-gen gaming console with stunning graphics.',
      category: 'Gaming',
      imageUrl: 'https://example.com/images/ps5.jpg',
      stock: 10,
      rating: 4.9
    },
    {
      name: 'Samsung Galaxy S21',
      price: 799,
      description: 'High-end Android smartphone with excellent performance.',
      category: 'Electronics',
      imageUrl: 'https://example.com/images/samsung-galaxy-s21.jpg',
      stock: 15,
      rating: 4.6
    },
    {
      name: 'Sony WH-1000XM4',
      price: 349,
      description: 'Noise-cancelling headphones with superior sound quality.',
      category: 'Audio',
      imageUrl: 'https://example.com/images/sony-headphones.jpg',
      stock: 30,
      rating: 4.8
    },
    {
      name: 'Dell XPS 13',
      price: 1199,
      description: 'High-performance laptop with a sleek design.',
      category: 'Computers',
      imageUrl: 'https://example.com/images/dell-xps-13.jpg',
      stock: 5,
      rating: 4.5
    },
    {
      name: 'Apple Watch Series 6',
      price: 399,
      description: 'Smartwatch with health tracking and stylish design.',
      category: 'Wearables',
      imageUrl: 'https://example.com/images/apple-watch.jpg',
      stock: 20,
      rating: 4.7
    },
    {
      name: 'Google Pixel 6',
      price: 699,
      description: 'Google’s flagship Android phone with excellent camera.',
      category: 'Electronics',
      imageUrl: 'https://example.com/images/google-pixel-6.jpg',
      stock: 18,
      rating: 4.5
    },
    {
      name: 'Nintendo Switch',
      price: 299,
      description: 'Hybrid gaming console with portable and docked modes.',
      category: 'Gaming',
      imageUrl: 'https://example.com/images/nintendo-switch.jpg',
      stock: 22,
      rating: 4.6
    },
    {
      name: 'Bose QuietComfort 35',
      price: 299,
      description: 'Wireless noise-cancelling headphones with superior comfort.',
      category: 'Audio',
      imageUrl: 'https://example.com/images/bose-quietcomfort.jpg',
      stock: 28,
      rating: 4.8
    },
    {
      name: 'Microsoft Surface Pro 7',
      price: 899,
      description: 'Versatile 2-in-1 laptop with detachable keyboard.',
      category: 'Computers',
      imageUrl: 'https://example.com/images/surface-pro-7.jpg',
      stock: 12,
      rating: 4.4
    },
    {
      name: 'Garmin Forerunner 945',
      price: 599,
      description: 'Advanced GPS smartwatch for athletes with long battery life.',
      category: 'Wearables',
      imageUrl: 'https://example.com/images/garmin-forerunner-945.jpg',
      stock: 17,
      rating: 4.7
    },
    {
      name: 'Sony A7 III',
      price: 1999,
      description: 'Full-frame mirrorless camera with exceptional image quality.',
      category: 'Electronics',
      imageUrl: 'https://example.com/images/sony-a7-iii.jpg',
      stock: 8,
      rating: 4.9
    }
  ];
}
