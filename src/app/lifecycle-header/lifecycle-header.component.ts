import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-header',
  templateUrl: './lifecycle-header.component.html',
  styleUrls: ['./lifecycle-header.component.css']
})
export class LifecycleHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
