import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(privateacess:AuthGuard) { }

  ngOnInit(): void {
  }
onclick()
{
  alert("sucess")
}
}
