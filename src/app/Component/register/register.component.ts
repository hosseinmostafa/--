import { Component } from '@angular/core';
import { USERModul } from './UserModule';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  userModel = new USERModul('', '', '', '', false);


  constructor(private userService: UserService) { }
  onSubmit() {
    this.userService.addUser(this.userModel).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }
}