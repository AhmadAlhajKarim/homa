import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { BehaviorSubject } from 'rxjs';
import { style, animate, animation } from '@angular/animations';
@Component({
  selector: 'app-year-overview',
  templateUrl: './year-overview.component.html',
  styleUrls: ['./year-overview.component.scss'],
})
export class YearOverviewComponent implements OnInit {
  fadeIn = animation([
    style({ opacity: 0 }), // start state
    animate('300ms', style({ opacity: 1 })),
  ]);

  fadeOut = animation([animate('300ms', style({ opacity: 0 }))]);

  _year = parseInt(this._route.snapshot.paramMap.get('year'));
  private _projects: Array<[]>;
  private _project$: BehaviorSubject<any>;
  private _currentProjectImages$: BehaviorSubject<[]>;
  dotPosition = 'top';
  effect = 'scrollx';
  constructor(private _route: ActivatedRoute, private http: HttpClient) {
    this._projects = new Array();
    this._project$ = new BehaviorSubject<any>(null);
    this._currentProjectImages$ = new BehaviorSubject<[]>([]);
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

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide =
      previous < 0 ? this._currentProjectImages$.value.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide =
      next === this._currentProjectImages$.value.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
}
