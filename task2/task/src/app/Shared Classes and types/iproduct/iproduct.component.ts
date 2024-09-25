import { Component } from '@angular/core';
import { DiscountOffers } from './discount-offers/discount-offers.component';
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
  Discount: DiscountOffers
}

export class DiscountOffersComponent{
  // discountOffers: DiscountOffers[] = [
  //   DiscountOffers.NoDiscount,
  //   DiscountOffers.TenPercent,
  //   DiscountOffers.FifteenPercent
  // ]
}




