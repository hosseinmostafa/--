import { Component } from '@angular/core';
import { USERModul } from './UserModule';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
// userModel: any;
  userModel = new USERModul('', '', '', '', false);

  constructor(private userService: UserService) { }
  onSubmit() {
    this.userService.addUser(this.userModel).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }

}
