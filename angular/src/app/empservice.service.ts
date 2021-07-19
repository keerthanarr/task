import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor() { }
  getEmployee()
  {
    return[
      {"id":1,"name":"keerthana", "age":22},
      {"id":2,"name":"Ramya", "age":20}
    ];
  }
}
