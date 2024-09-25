import { Component } from '@angular/core';

@Component({
  selector: 'app-iproduct',
  templateUrl: './iproduct.component.html',
  styleUrl: './iproduct.component.scss'
})
export class IProductComponent {

}

export interface IProduct {
  ID: number
  Name: string
  Quantity: number
  Price: number
  Img: string
}
