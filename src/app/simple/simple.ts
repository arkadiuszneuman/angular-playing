import { Component } from '@angular/core';
import { TestStructuralDirective } from '../test-structural-directive';

@Component({
  selector: 'app-simple',
  imports: [TestStructuralDirective],
  templateUrl: './simple.html',
  styleUrl: './simple.scss'
})
export class Simple {

}
