import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../../Services/emplyee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplyee-list',
  templateUrl: './emplyee-list.component.html',
  styleUrl: './emplyee-list.component.scss'
})

export class EmplyeeListComponent implements OnInit {

  employees: any = [];
  errMsg: any;
  constructor(
    private employeeService: EmplyeeService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        this.errMsg = err;
      },
    });
  }

  goToEmployeeDetails(id: any) {
    this.router.navigate(['employee', id]);
  }
  // employees = [
  //     {
  //       id: 1,
  //       name: 'Mark'
  //     },
  //     {
  //       id: 2,
  //       name: 'Jhon'
  //     },
  //     {
  //       id: 3,
  //       name: 'Carl'
  //     }
  //   ]
}
