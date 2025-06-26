import { Directive, effect, inject, Input, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTestStructural]'
})
export class TestStructuralDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  appTestStructural = input.required<boolean>();

  constructor() {
    effect(() => {
      this.viewContainerRef.clear();
      if (!this.appTestStructural()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    })
  }

  // condition = input.required<boolean>();
  // else = input<TemplateRef<any>>();

  // constructor() {
  //   effect(() => {
  //     const condition = this.condition();
  //     const elseTemplate = this.else();

  //     this.viewContainerRef.clear();

  //     if (!condition) {
  //       this.viewContainerRef.createEmbeddedView(this.templateRef);
  //     } else if (elseTemplate) {
  //       this.viewContainerRef.createEmbeddedView(elseTemplate);
  //     }
  //   });
  // }
}

