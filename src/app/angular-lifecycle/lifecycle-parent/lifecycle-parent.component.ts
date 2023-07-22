import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-parent',
  templateUrl: './lifecycle-parent.component.html',
  styleUrls: ['./lifecycle-parent.component.css']
})
export class LifecycleParentComponent implements OnInit {

  showLifeCycleDemo = false;
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  flipShowLifeCycleState(): void {
    this.showLifeCycleDemo = !this.showLifeCycleDemo;
  }

  incrementCount(): void {
    this.count++;
  }
}
