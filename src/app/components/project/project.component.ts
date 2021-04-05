import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor() {}
  array = ['1.jpeg', '2.jpeg', '3.jpeg'];

  ngOnInit(): void {}
  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.array.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.array.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
}
