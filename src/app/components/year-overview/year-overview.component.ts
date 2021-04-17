import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {
  style,
  animate,
  animation,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-year-overview',
  templateUrl: './year-overview.component.html',
  styleUrls: ['./year-overview.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class YearOverviewComponent implements OnInit {
  _year = parseInt(this._route.snapshot.paramMap.get('year'));
  subscription: Subscription;
  currentSlide = 0;

  private _projects: Array<[]>;
  private _project$: BehaviorSubject<any>;
  private _currentProjectImages$: BehaviorSubject<[]>;

  constructor(private _route: ActivatedRoute, private http: HttpClient) {
    this._projects = new Array();
    this._project$ = new BehaviorSubject<any>(null);
    this._currentProjectImages$ = new BehaviorSubject<[]>([]);
    const source = interval(4000);
    this.subscription = source.subscribe((val) => this.autoPlay());
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((el: any) => {
      this.http.get('../../../assets/data.json').subscribe((data: any) => {
        this._projects = data;
        this._project$.next(
          this._projects.find((pr: any) => pr.year == el.params.year)
        );
        this._currentProjectImages$.next(this.project$.value.images);
      });
    });
  }

  get year() {
    return this._year;
  }

  get project$() {
    return this._project$;
  }

  get currentProjectImages$() {
    return this._currentProjectImages$;
  }
  goTo(index) {
    this.subscription.unsubscribe();
    this.currentSlide = index;
  }
  onPreviousClick() {
    this.subscription.unsubscribe();

    const previous = this.currentSlide - 1;
    this.currentSlide =
      previous < 0 ? this._currentProjectImages$.value.length - 1 : previous;
  }

  onNextClick() {
    this.subscription.unsubscribe();

    const next = this.currentSlide + 1;
    this.currentSlide =
      next === this._currentProjectImages$.value.length ? 0 : next;
  }

  autoPlay() {
    const next = this.currentSlide + 1;
    this.currentSlide =
      next === this._currentProjectImages$.value.length ? 0 : next;
  }
}
