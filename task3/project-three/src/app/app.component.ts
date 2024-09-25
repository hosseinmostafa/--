import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './Component/prodect/prodect.component';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-three';
  @ViewChild('productComponent') productComponent: ProductComponent;

  renderValues() {
    this.productComponent.renderValues();
  }
}
