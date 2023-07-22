import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {

  movieName: string = '';
  counter: number = 0;
  counterPlus: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showMovie(){
    this.movieName = 'Avengers';
  }

  incrementCounter(){
    //this.counter = this.counter + 1;
    this.counter++;
    this.counterPlus = this.counter;
  }

  decrementCounter(){
    //this.counter = this.counter - 1;
    this.counter--;
  }
}
