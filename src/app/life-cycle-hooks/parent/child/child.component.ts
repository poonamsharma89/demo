import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy,
                                        AfterContentInit, AfterContentChecked,
                                        AfterViewInit, AfterViewChecked{

  @Input() msgFromParent: string = 'initial value';

  constructor() { 
    console.log("child constructor called...")
    //console.log("constructor:" + this.msgFromParent);
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called...");
 //   console.log("ngOnChanges:" + this.msgFromParent);
 //   console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit is called...");
  //  console.log("ngOnInit:" + this.msgFromParent);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is called...");
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called...");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called...");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called...");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is called...");
  }
}
