import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-offers',
  templateUrl: './discount-offers.component.html',
  styleUrl: './discount-offers.component.scss'
})
export class DiscountOffersComponent {

}


export enum DiscountOffers {
  "No Discount",
  "10%",
  "15%"
}
