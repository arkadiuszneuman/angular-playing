import { Component } from '@angular/core';
import { TestAttributeDirective } from './specific/test-attribute-directive';

@Component({
  selector: 'app-directives',
  imports: [TestAttributeDirective],
  templateUrl: './directives.html',
  styleUrl: './directives.scss'
})
export class Directives {

}
