import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employeename',
  templateUrl: './employeename.component.html',
  styleUrls: ['./employeename.component.css']
})
export class EmployeenameComponent implements OnInit {

  employees: any;
  constructor(private _employeeservice: EmpserviceService) { }

  ngOnInit(): void {
    this.employees =this._employeeservice.getEmployee();
  }

}
