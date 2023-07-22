import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  // creating an Observable
  // we will not do any of this when we work with HttpClient
    // because the Observbale is alreadt created/wrapped around the response and reached the angular service
  myObservable: Observable<number> = new Observable((observer)=>{
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
    // observer.next(5);
    setTimeout(()=>observer.next(1), 1000);
    setTimeout(()=>observer.next(2), 2000);
    setTimeout(()=>observer.next(3), 3000);
    //setTimeout(()=>observer.error(new Error('Some error has occured')), 4000);
    setTimeout(()=>observer.next(4), 4000);
    setTimeout(()=>observer.next(5), 5000);
    setTimeout(()=>observer.complete(), 6000);
  })

  allColors: string[] = ["RED", "BLUE", "GREEN"];

  myObservable2: Observable<any> = of(this.allColors, 45, "Avengers");

  myObservable3: Observable<string> = from(this.allColors);

  myObservable4: Observable<string> = from(this.allColors).pipe(map((data)=>data.toLowerCase()));

  myObservable5: Observable<string> = from(this.allColors).pipe<string>(filter((data: string)=>data.startsWith("R")));

  constructor() { }

  ngOnInit(): void {
  }

  start(){

    // commented this because it is deprecated
    // this.myObservable3.subscribe((val)=>{
    //   console.log(val);
    // }, (error)=>{
    //   alert(error.message)
    // }, ()=>{
    //   alert("streaming/emitting is over!");
    // })

    this.myObservable5.subscribe({
      next: (val)=>{
        console.log(val);
      },
      error: (error)=>{
        alert(error.message)
      },
      complete: ()=>{
        alert("streaming/emitting is over!");
      }
    })
  }
}
