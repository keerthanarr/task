import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any;
  constructor(privateacess:AuthGuard) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl()


    })
  }
onclick()
{
 console.log(this.login.value);
}
}