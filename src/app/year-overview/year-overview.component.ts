import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-year-overview',
  templateUrl: './year-overview.component.html',
  styleUrls: ['./year-overview.component.scss'],
})
export class YearOverviewComponent implements OnInit {
  _year = parseInt(this._route.snapshot.paramMap.get('year'));

  projects;

  data = [
    {
      title: 'Project 1',
    },
    {
      title: 'Project 2',
    },
  ];
  effect = 'scrollx';
  constructor(private _route: ActivatedRoute) {
    console.log(this._year);
  }

  ngOnInit(): void {
    let i = [
      {
        year: 2011,
        projects: [
          {
            name: 'shareme',
            description: '',
            images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'],
          },
          {
            name: 'test',
            description: '',
            images: ['1.jpg','2.jpg']
          },
        ],
      },
      {
        year: 2013,
        projects: [
          {
            name: 'Aesthetic of a zebra',
            description: '',
            images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'],
          },
         
        ],
      },
    ];

    this.projects = i.find((el) => el.year === this._year).projects;
    console.log(this.projects);
  }

  get year(){
    return this._year
  }
}
