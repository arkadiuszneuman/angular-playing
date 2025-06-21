import { Component, signal } from '@angular/core';
import { InternalComponent } from './internal-component/internal-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-components',
  imports: [InternalComponent, FormsModule],
  templateUrl: './components.html',
  styleUrl: './components.scss'
})
export class Components {
  testInput = signal("Test input from Components");

}
