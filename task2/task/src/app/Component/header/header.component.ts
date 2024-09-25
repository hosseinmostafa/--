import { Component } from '@angular/core';
import { ICategory } from '../../Shared Classes and types/iproduct/icategory/icategory.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  bannerImage : string = "./favicon_io/android-chrome-192x192.png"
  icon : string = "./favicon_io/favicon.ico"


  categories : ICategory[] = []
}

export class ICategoryComponent{
  bannerImage : string = "./favicon_io/android-chrome-192x192.png"
  icon : string = "./favicon_io/favicon.ico"
}

