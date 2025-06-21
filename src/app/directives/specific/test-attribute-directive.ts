import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: 'p[appTestAttributeDirective]'
})
export class TestAttributeDirective {
  private el: ElementRef<HTMLDivElement> = inject(ElementRef);
  appTestAttributeDirective = input('');

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.appTestAttributeDirective();
    this.el.nativeElement.style.border = '1px solid black';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.el.nativeElement.style.border = '';
  }
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
