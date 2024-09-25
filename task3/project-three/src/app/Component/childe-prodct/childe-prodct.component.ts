import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childe-prodct',
  templateUrl: './childe-prodct.component.html',
  styleUrl: './childe-prodct.component.scss'
})
export class ChildeProdctComponent {
  showTable = false;

  renderValues() {
    this.showTable = true;
  }
}
