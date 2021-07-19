import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
name= "keerthi";
person = { "lastname":"keerthana", "firstname":"R" }
date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
