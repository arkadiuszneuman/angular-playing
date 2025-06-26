import { Directive, effect, inject, Input, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTestStructural]'
})
export class TestStructuralDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  appTestStructural = input.required<boolean>();
  appTestStructuralElse = input<TemplateRef<any>>();

  constructor() {
    effect(() => {
      const condition = this.appTestStructural();
      const elseTemplate = this.appTestStructuralElse();

      this.viewContainerRef.clear();

      if (!condition) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else if (elseTemplate) {
        this.viewContainerRef.createEmbeddedView(elseTemplate);
      }
    });
  }
}
