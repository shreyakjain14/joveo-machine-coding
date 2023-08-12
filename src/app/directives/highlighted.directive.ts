import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
})
export class HighlightedDirective {
  @Input() hoverClass = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseover') mouseOver() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }
}
