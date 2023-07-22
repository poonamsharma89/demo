import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  //private element: ElementRef;  

  @HostBinding('style.backgroundColor') background: string = 'initial';
  @HostBinding('style.fontWeight') fontWeight: string = 'initial';

  constructor(private element: ElementRef, private renderer: Renderer2) {
      //this.element = element;
  }

  @HostListener('mouseenter') onMouseEnters(){
    // don't alter the dom styles directly, do it through Renderer2
    // this.element.nativeElement.style.backgroundColor="yellow";
    // this.element.nativeElement.style.fontWeight="bold";

    // commented these lines because @HostBinding is used
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
    // this.renderer.setStyle(this.element.nativeElement, 'fontWeight', 'bold');

    this.background = 'yellow';
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeaves(){
    // this.element.nativeElement.style.backgroundColor="initial";
    // this.element.nativeElement.style.fontWeight="initial";

    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'initial');
    // this.renderer.setStyle(this.element.nativeElement, 'fontWeight', 'initial');

    this.background = 'initial';
    this.fontWeight = 'initial';
  }

}
