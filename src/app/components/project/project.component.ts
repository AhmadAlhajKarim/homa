import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  subscription: Subscription;

  constructor() {
    const source = interval(4000);
    this.subscription = source.subscribe((val) => this.autoPlay());
  }
  array = ['1.jpeg', '2.jpeg', '3.jpeg'];

  ngOnInit(): void {}
  currentSlide = 0;

  onPreviousClick() {
    this.subscription.unsubscribe();
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.array.length - 1 : previous;
  }

  onNextClick() {
    this.subscription.unsubscribe();
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.array.length ? 0 : next;
  }

  goTo(index) {
    this.subscription.unsubscribe();

    this.currentSlide = index;
  }

  autoPlay() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.array.length ? 0 : next;
  }
}
