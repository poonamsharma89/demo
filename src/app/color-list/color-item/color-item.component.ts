import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.css']
})
export class ColorItemComponent implements OnInit {

  @Input() colorFromParent: string = '';
  @Output() removeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(color: string){
    // emit this event to the parent class
    // for this we will use EventEmitter
    this.removeEmitter.emit(color);
  }
}
