import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }
  array = ["1.jpeg", "2.jpeg", "3.jpeg"];

  ngOnInit(): void {
  }

}
