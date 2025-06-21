import { Component, signal } from '@angular/core';
import { InternalComponent } from './internal-component/internal-component';
import { FormsModule } from '@angular/forms';
import { TwoWayBinding } from "./two-way-binding/two-way-binding";

@Component({
  selector: 'app-components',
  imports: [InternalComponent, FormsModule, TwoWayBinding],
  templateUrl: './components.html',
  styleUrl: './components.scss'
})
export class Components {
  testInput = signal("Test input from Components");

  textChange = (value: string) => {
    console.log("Text changed to: ", value);
  }
}
