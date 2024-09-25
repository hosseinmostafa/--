import { Component } from '@angular/core';

@Component({
  selector: 'app-icategory',
  templateUrl: './icategory.component.html',
  styleUrl: './icategory.component.scss'
})
export class ICategoryComponent {

}

export interface ICategory {
  ID: number
  Name: string
}
