import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-interview-text',
  imports: [],
  templateUrl: './interview-text.html',
  styleUrl: './interview-text.scss'
})
export class InterviewText {
  isActivated = input(false)
  classes = computed(() => this.isActivated() ? 'activated' : '')
}
