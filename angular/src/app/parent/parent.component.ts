import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
@ViewChild(ChildComponent) child:any;
name="keerthi";
message="";
  ngOnInit(): void {
  }
viewchild()
{
this.child.visible=!this.child.visible;
}
}
