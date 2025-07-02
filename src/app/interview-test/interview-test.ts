import { Component, input, signal } from '@angular/core';
import { InterviewText } from "./interview-text/interview-text";

@Component({
  selector: 'app-interview-test',
  imports: [InterviewText],
  templateUrl: './interview-test.html',
  styleUrl: './interview-test.scss'
})
export class InterviewTest {
  isActivated = signal(false)

  onButtonClick() {
    this.isActivated.update(x => !x)
  }

}
