import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../../Services/emplyee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emplyee-ditels',
  templateUrl: './emplyee-ditels.component.html',
  styleUrl: './emplyee-ditels.component.scss'
})
export class EmplyeeDitelsComponent implements OnInit {
  errMsg: any;
  oneEmployee: any;
  employeeId: any;

  constructor(
    private employeeService: EmplyeeService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.employeeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.employeeService.getOneEmployee(+this.employeeId).subscribe({
      next: (data) => {
        console.log(data);
        this.oneEmployee = data;
      },
      error: (err) => {
        console.log(err);
        this.errMsg = err;
      },
    });
  }
}

