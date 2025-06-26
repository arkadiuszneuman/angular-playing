import { Component, OnInit, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { TestStructuralDirective } from '../test-structural-directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-simple',
  imports: [TestStructuralDirective, NgTemplateOutlet],
  templateUrl: './simple.html',
  styleUrl: './simple.scss',
  host: {
    'role': 'slider'
  }
})
export class Simple implements OnInit {
  testTemplate = viewChild("testTemplate", { read: TemplateRef })
  testContainer = viewChild('testContainer', { read: ViewContainerRef })

  ngOnInit(): void {
    const template = this.testTemplate()
    if (template) {
      this.testContainer()?.createEmbeddedView(template)
    }
  }

}
