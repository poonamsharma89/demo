import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msgToChild: string = '';
  valueMsg: string = '';
  showChild: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sending(){
    this.msgToChild = this.valueMsg;
  }

  toggleChild(){
    this.showChild = !this.showChild;
  }
}
