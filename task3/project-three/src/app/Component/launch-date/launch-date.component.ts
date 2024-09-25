import { Component } from '@angular/core';

@Component({
  selector: 'app-launch-date',
  templateUrl: './launch-date.component.html',
  styleUrl: './launch-date.component.scss'
})
export class LaunchDateComponent {
  launchDate = new Date();
  formats = ['yyyy-MM-dd', 'MMM d, y h:mm:ss a', 'MMM d, y', 'M/d/yy h:mm a'];
  selectedFormat = 'MMM d, y';
}


