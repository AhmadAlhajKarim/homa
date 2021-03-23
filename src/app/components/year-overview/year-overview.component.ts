import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-year-overview',
  templateUrl: './year-overview.component.html',
  styleUrls: ['./year-overview.component.scss'],
})
export class YearOverviewComponent implements OnInit {
  _year = parseInt(this._route.snapshot.paramMap.get('year'));
  private _projects: Array<[]>;
  private _projects$: BehaviorSubject<[]>;
  projects;

  effect = 'scrollx';
  constructor(private _route: ActivatedRoute, private http: HttpClient) {
    this._projects = new Array();
    this._projects$ = new BehaviorSubject<[]>([]);
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((el: any) => {
      console.log(el.params.year);
      this.http.get('../../../assets/data.json').subscribe((data: any) => {
        this._projects = data;
        this._projects$.next(
          this._projects.find((el: any) => (el.year = el.params.year))
        );
      });
    });

    let i = [
      {
        year: 2011,
        projects: [
          {
            name: 'shareme',
            description: '',
            images: [
              '1.jpg',
              '2.jpg',
              '3.jpg',
              '4.jpg',
              '5.jpg',
              '6.jpg',
              '7.jpg',
              '8.jpg',
              '9.jpg',
              '10.jpg',
            ],
          },
          {
            name: 'test',
            description: '',
            images: ['1.jpg', '2.jpg'],
          },
        ],
      },
      {
        year: 2013,
        projects: [
          {
            name: 'Aesthetic of a zebra',
            description: '',
            images: [
              '1.jpg',
              '2.jpg',
              '3.jpg',
              '4.jpg',
              '5.jpg',
              '6.jpg',
              '7.jpg',
              '8.jpg',
            ],
          },
        ],
      },
    ];

    this.projects = i.find((el) => el.year === this._year).projects;
  }

  get year() {
    return this._year;
  }

  get projects$() {
    console.log(this._projects$.value);
    return this._projects$;
  }
}
