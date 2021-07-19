import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentData: any;
@Output() childevent=new EventEmitter()
  constructor() { }
visible=true;
  ngOnInit(): void {
  }
Event()
{
  this.childevent.emit('hey angular');
}
}
