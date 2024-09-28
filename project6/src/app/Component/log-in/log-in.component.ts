import { Component } from '@angular/core';
import { USERModul } from './UserModule';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
// userModel: any;
  userModel = new USERModul('', '', '', '', false);

}
