import { Component, input } from '@angular/core';

@Component({
  selector: 'app-internal-component',
  imports: [],
  templateUrl: './internal-component.html',
  styleUrl: './internal-component.scss'
})
export class InternalComponent {
  testInput = input('');
}
