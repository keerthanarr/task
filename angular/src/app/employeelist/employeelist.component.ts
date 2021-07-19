import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: any;
  constructor(private _employeeservice: EmpserviceService) { }

  ngOnInit(): void {
    this.employees =this._employeeservice.getEmployee();
  }

}
