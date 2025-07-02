import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-internal-component',
  imports: [],
  templateUrl: './internal-component.html',
  styleUrl: './internal-component.scss'
})
export class InternalComponent implements OnInit {
  testInput = input('');
  testOutput = output()

  ngOnInit(): void {
    setTimeout(() => this.testOutput.emit(), 1000);
  }
}
