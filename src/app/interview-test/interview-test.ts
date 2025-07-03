import { Component, input, signal } from '@angular/core';
import { InterviewText } from "./interview-text/interview-text";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interview-test',
  imports: [InterviewText, FormsModule],
  templateUrl: './interview-test.html',
  styleUrl: './interview-test.scss'
})
export class InterviewTest {
  isActivated = signal(false)
  post = signal<{ title: string }>({ title: '' });

  onButtonClick() {
    this.isActivated.update(x => !x)
  }

  onFormSubmit() {
    console.log('Form submitted ', this.post());
  }
}
